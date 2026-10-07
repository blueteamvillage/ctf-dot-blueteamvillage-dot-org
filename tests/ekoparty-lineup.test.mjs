import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

function load(path, dependencies = {}) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  })
  const exports = {}
  runInNewContext(outputText, {
    exports,
    require(name) {
      if (!(name in dependencies)) throw new Error(`Unexpected dependency: ${name}`)
      return dependencies[name]
    },
    console: { warn() {} },
  })
  return exports
}

const fallback = load('../lib/content/fallback.ts')
async function lineup(client) {
  const queries = load('../lib/contentful/queries.ts', {
    'server-only': {},
    '@/lib/content/fallback': fallback,
    '@/lib/contentful/client': { getContentfulClient: () => client },
  })
  return queries.getEkopartyChallenges()
}

function checkLive(challenges) {
  assert.equal(challenges.length, 24)
  assert.equal(new Set(challenges.map(c => c.challengeId)).size, 24)
  assert.equal(challenges.reduce((sum, c) => sum + c.points, 0), 3900)
  for (const [track, count, points] of [
    ['malware-forensics', 10, 2100], ['incident-response', 6, 600], ['osint', 8, 1200],
  ]) {
    const group = challenges.filter(c => c.track === track)
    assert.equal(group.length, count)
    assert.equal(group.reduce((sum, c) => sum + c.points, 0), points)
  }
  for (const challenge of challenges) {
    assert.equal(challenge.availability, 'available')
    assert.equal(challenge.skillbitUrl, challenge.track === 'osint'
      ? 'https://geosint.blueteamvillage.org/'
      : 'https://compete.metactf.com/665/problems')
  }
}

test('all 24 challenges remain live without Contentful', async () => {
  checkLive(await lineup(null))
})
test('empty CMS catalog and API failures preserve the complete live lineup', async () => {
  checkLive(await lineup({ getEntries: async () => ({ items: [] }) }))
  checkLive(await lineup({ getEntries: async () => { throw new Error('offline') } }))
})
test('stale CMS entries enrich briefs without overriding live catalog or hiding OSINT', async () => {
  const challenges = await lineup({ getEntries: async () => ({ items: [
    { fields: { challengeId: 409, availability: 'coming-soon', skillbitUrl: '',
      points: 0, title: 'Stale title', descriptionEn: 'Updated brief', descriptionEs: 123 } },
    { fields: { challengeId: 9999, availability: 'available', skillbitUrl: 'javascript:alert(1)' } },
  ] }) })
  checkLive(challenges)
  const challenge = challenges.find(c => c.challengeId === 409)
  assert.equal(challenge.title, 'Ghost in the shm')
  assert.equal(challenge.descriptionEn, 'Updated brief')
  assert.equal(challenge.descriptionEs, fallback.fallbackEkopartyChallenges[0].descriptionEs)
})
