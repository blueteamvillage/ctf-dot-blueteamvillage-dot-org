"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Binoculars,
  Bug,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  Info,
  Languages,
  MapPin,
  Radar,
  Siren,
  Trophy,
} from "lucide-react"

import { Faq } from "@/components/dc34/faq"
import { GradientDivider } from "@/components/dc34/gradient-divider"
import { IconChip } from "@/components/dc34/icon-chip"
import { PillBadge } from "@/components/dc34/pill-badge"
import { EkopartyChallengeCard } from "@/components/dc34/ekoparty-challenge-card"
import {
  EkopartyFilters,
  matchesFilter,
  type EkopartyFilter,
} from "@/components/dc34/ekoparty-filters"
import { Button } from "@/components/ui/button"
import {
  EKOPARTY_COPY,
  type EkopartyCopy,
  type Lang,
} from "@/lib/content/ekoparty-copy"
import type { EkopartyChallenge } from "@/lib/contentful/types"

const SKILLBIT_URL = "https://mctf.io/ekoparty26"
const DISCORD_URL = "https://discord.gg/blueteamvillage"

/*
 * The GEOSINT environment URL hasn't been published yet. Leaving it empty
 * renders the OSINT CTA disabled rather than shipping a dead link — fill it
 * in here when the environment is live.
 */
const GEOSINT_URL = ""

const FILTER_IDS: EkopartyFilter[] = [
  "all",
  "malware-forensics",
  "incident-response",
  "osint",
  "Beginner",
  "Intermediate",
  "Advanced",
  "available",
]

export function EkopartyClient({
  challenges,
}: {
  challenges: EkopartyChallenge[]
}) {
  const [lang, setLang] = useState<Lang>("es")
  const [filter, setFilter] = useState<EkopartyFilter>("all")

  const copy = EKOPARTY_COPY[lang]
  const t = copy.lineup

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTER_IDS.map((id) => [
          id,
          challenges.filter((c) => matchesFilter(c, id)).length,
        ])
      ) as Record<EkopartyFilter, number>,
    [challenges]
  )

  const visible = useMemo(
    () => challenges.filter((c) => matchesFilter(c, filter)),
    [challenges, filter]
  )

  const shownPoints = visible.reduce((sum, c) => sum + c.points, 0)
  const malware = visible.filter((c) => c.track === "malware-forensics")
  const ir = visible.filter((c) => c.track === "incident-response")
  const osint = visible.filter((c) => c.track === "osint")

  const heroCards = [
    { icon: Calendar, tone: "teal" as const, label: copy.hero.cards.dates },
    { icon: MapPin, tone: "teal" as const, label: copy.hero.cards.place },
    { icon: Bug, tone: "gold" as const, label: copy.hero.cards.malware },
    { icon: Siren, tone: "magenta" as const, label: copy.hero.cards.ir },
    { icon: Globe, tone: "mint" as const, label: copy.hero.cards.osint },
    { icon: Trophy, tone: "mint" as const, label: copy.hero.cards.scoring },
  ]

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/challenges"
          className="inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-teal-bright"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {copy.backToChallenges}
        </Link>

        {/* Language toggle — scoped to this page; the rest of the site is English. */}
        <div
          role="group"
          aria-label={copy.langToggle.label}
          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] p-1"
        >
          <Languages className="ml-1.5 h-4 w-4 text-haze" aria-hidden />
          {(["es", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={
                lang === code
                  ? "rounded-sm bg-teal/20 px-2.5 py-1 text-xs font-bold text-teal-bright"
                  : "rounded-sm px-2.5 py-1 text-xs text-mist transition-colors hover:text-fog"
              }
            >
              {copy.langToggle[code]}
            </button>
          ))}
        </div>
      </div>

      {/* 1 — Hero */}
      <section className="mt-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">
          BTV CTF <span className="animate-pulse-glow text-teal-bright">@</span>{" "}
          EkoParty 2026
        </h1>
        <p className="mt-2 text-lg font-medium uppercase tracking-[0.2em] text-teal-bright">
          {copy.hero.subtitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-mist">
          {copy.hero.body}
        </p>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-mist">
          {copy.hero.body2}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {heroCards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center gap-2 rounded-lg border border-white/[0.06] bg-navy-card p-4"
            >
              <IconChip icon={card.icon} tone={card.tone} />
              <p className="text-sm text-fog">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={SKILLBIT_URL} target="_blank" rel="noopener noreferrer">
              {copy.hero.ctaPrimary}
              <ExternalLink aria-hidden />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#setup">{copy.hero.ctaSecondary}</a>
          </Button>
          {GEOSINT_URL ? (
            <Button asChild size="lg" variant="outline">
              <a href={GEOSINT_URL} target="_blank" rel="noopener noreferrer">
                {copy.hero.ctaOsint}
                <ExternalLink aria-hidden />
              </a>
            </Button>
          ) : (
            <Button asChild size="lg" variant="outline">
              <a href="#osint">{copy.hero.ctaOsint}</a>
            </Button>
          )}
        </div>
      </section>

      <GradientDivider className="my-16" />

      {/* 2 — About the collaboration */}
      <Section eyebrow={copy.about.eyebrow} heading={copy.about.heading}>
        <p className="leading-relaxed text-mist">{copy.about.body}</p>
        <p className="mt-4 leading-relaxed text-mist">{copy.about.body2}</p>
      </Section>

      {/* 3 — Competition overview */}
      <Section eyebrow={copy.overview.eyebrow} heading={copy.overview.heading}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat value="24" label={copy.overview.challenges} />
          <Stat value="3,900" label={copy.overview.points} />
          <Stat
            value="8"
            label={copy.overview.scenarios}
            detail={copy.overview.scenariosDetail}
          />
          <Stat value="3" label={copy.overview.tracks} />
        </div>
        <Callout icon={Info} className="mt-6">
          {copy.overview.note}
        </Callout>
      </Section>

      {/* 4 — Malware forensics */}
      <Section eyebrow={copy.malware.eyebrow} heading={copy.malware.heading}>
        <p className="leading-relaxed text-mist">{copy.malware.body}</p>
        <div className="mt-4">
          <PillBadge>{copy.malware.meta}</PillBadge>
        </div>
      </Section>

      {/* 5 — Incident response capstone */}
      <Section eyebrow={copy.ir.eyebrow} heading={copy.ir.heading}>
        <p className="leading-relaxed text-mist">{copy.ir.body}</p>
        <p className="mt-4 leading-relaxed text-mist">{copy.ir.body2}</p>
        <div className="mt-4">
          <PillBadge>{copy.ir.meta}</PillBadge>
        </div>
      </Section>

      {/* 6 — OSINT / GEOSINT */}
      <Section
        id="osint"
        eyebrow={copy.osint.eyebrow}
        heading={copy.osint.heading}
      >
        <p className="leading-relaxed text-mist">{copy.osint.body}</p>
        <p className="mt-4 leading-relaxed text-mist">{copy.osint.body2}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {GEOSINT_URL ? (
            <Button asChild>
              <a href={GEOSINT_URL} target="_blank" rel="noopener noreferrer">
                <Binoculars aria-hidden />
                {copy.osint.cta}
              </a>
            </Button>
          ) : (
            <Button variant="outline" disabled>
              <Binoculars aria-hidden />
              {copy.osint.cta}
            </Button>
          )}
          <span className="text-sm text-haze">{copy.osint.meta}</span>
        </div>
      </Section>

      {/* 7 — The lineup */}
      <Section
        id="lineup"
        eyebrow={copy.lineup.eyebrow}
        heading={copy.lineup.heading}
      >
        <p className="leading-relaxed text-mist">{copy.lineup.intro}</p>

        <div className="mt-6">
          <EkopartyFilters
            active={filter}
            onChange={setFilter}
            counts={counts}
            copy={copy}
          />
        </div>

        <p
          className="mt-4 font-mono text-sm text-haze"
          role="status"
          aria-live="polite"
        >
          {visible.length}{" "}
          {visible.length === 1 ? t.countOne : t.countMany} ·{" "}
          {shownPoints.toLocaleString(lang === "es" ? "es-AR" : "en-US")}{" "}
          {t.pointsShown}
        </p>

        {visible.length === 0 ? (
          <div className="mt-6 rounded-lg border border-white/[0.06] bg-navy-card p-8 text-center">
            <p className="font-bold text-white">{t.empty}</p>
            <p className="mt-2 text-sm text-mist">{t.emptyHint}</p>
          </div>
        ) : (
          <div className="mt-6 space-y-10">
            <TrackGroup
              title={copy.malware.heading}
              items={malware}
              lang={lang}
              copy={copy}
            />
            <TrackGroup
              title={copy.ir.heading}
              items={ir}
              lang={lang}
              copy={copy}
            />
            <TrackGroup
              title={copy.osint.heading}
              items={osint}
              lang={lang}
              copy={copy}
            />
          </div>
        )}
      </Section>

      {/* 8 — How to participate */}
      <Section
        eyebrow={copy.participate.eyebrow}
        heading={copy.participate.heading}
      >
        <ol className="space-y-3">
          {copy.participate.steps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal/40 bg-teal/15 font-mono text-xs font-bold text-teal-bright">
                {i + 1}
              </span>
              <span className="leading-relaxed text-fog">{step}</span>
            </li>
          ))}
        </ol>
        <Callout icon={Info} className="mt-6">
          {copy.participate.notice}
        </Callout>
      </Section>

      {/* 9 — Technical setup */}
      <Section id="setup" eyebrow={copy.tech.eyebrow} heading={copy.tech.heading}>
        <p className="leading-relaxed text-mist">{copy.tech.intro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Requirements title={copy.tech.allHeading} items={copy.tech.all} />
          <Requirements title={copy.tech.osintHeading} items={copy.tech.osint} />
          <Requirements
            title={copy.tech.malwareHeading}
            items={copy.tech.malware}
          />
        </div>
        <Callout icon={Radar} className="mt-6">
          {copy.tech.appleSilicon}
        </Callout>
      </Section>

      {/* 10 — Schedule */}
      <Section eyebrow={copy.schedule.eyebrow} heading={copy.schedule.heading}>
        <p className="text-sm text-haze">{copy.schedule.tz}</p>
        <div className="mt-4 divide-y divide-white/[0.06] overflow-hidden rounded-lg border border-white/[0.06] bg-navy-card">
          {copy.schedule.rows.map((row) => (
            <div
              key={`${row.day}-${row.time}`}
              className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-bold text-white">{row.day}</span>
              <span className="text-sm text-mist">{row.what}</span>
              <span className="font-mono text-xs text-haze">{row.time}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 11 — Rules */}
      <Section eyebrow={copy.rules.eyebrow} heading={copy.rules.heading}>
        <ul className="space-y-3">
          {copy.rules.items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-mint"
                aria-hidden
              />
              <span className="leading-relaxed text-fog">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <PillBadge>
            {copy.rules.teamSize}:{" "}
            <span className="text-haze">{copy.rules.teamSizeValue}</span>
          </PillBadge>
          <PillBadge>
            {copy.rules.prizes}:{" "}
            <span className="text-haze">{copy.rules.prizesValue}</span>
          </PillBadge>
        </div>
      </Section>

      {/* 12 — SkillBit */}
      <Section
        id="skillbit"
        eyebrow={copy.skillbit.eyebrow}
        heading={copy.skillbit.heading}
      >
        <p className="leading-relaxed text-mist">{copy.skillbit.body}</p>
        <div className="mt-6">
          <Button asChild size="lg">
            <a href={SKILLBIT_URL} target="_blank" rel="noopener noreferrer">
              {copy.skillbit.cta}
              <ExternalLink aria-hidden />
            </a>
          </Button>
        </div>
      </Section>

      {/* 13 — Support */}
      <Section eyebrow={copy.support.eyebrow} heading={copy.support.heading}>
        <p className="leading-relaxed text-mist">{copy.support.body}</p>
        <div className="mt-6">
          <Button asChild>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              {copy.support.channel}
              <ExternalLink aria-hidden />
            </a>
          </Button>
        </div>
      </Section>

      {/* 14 — Partners */}
      <Section eyebrow={copy.partners.eyebrow} heading={copy.partners.heading}>
        <p className="leading-relaxed text-mist">{copy.partners.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {["Blue Team Village", "EkoParty", "BlueSpace", "SkillBit"].map(
            (name) => (
              <PillBadge key={name} className="px-4 py-2 text-base text-fog">
                {name}
              </PillBadge>
            )
          )}
        </div>
      </Section>

      {/* 15 — FAQ */}
      <Section eyebrow={copy.faqEyebrow} heading={copy.faqHeading}>
        <Faq
          items={copy.faq.map((item, i) => ({
            question: item.q,
            answer: item.a,
            order: i + 1,
          }))}
        />
      </Section>

      {/* 16 — Legal */}
      <Section eyebrow={copy.legal.eyebrow} heading={copy.legal.heading}>
        <p className="leading-relaxed text-mist">{copy.legal.body}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link
            href="/code-of-conduct"
            className="text-teal-bright underline underline-offset-4 hover:text-mint"
          >
            {copy.legal.coc}
          </Link>
          <Link
            href="/privacy-policy"
            className="text-teal-bright underline underline-offset-4 hover:text-mint"
          >
            {copy.legal.privacy}
          </Link>
          <Link
            href="/terms-of-service"
            className="text-teal-bright underline underline-offset-4 hover:text-mint"
          >
            {copy.legal.terms}
          </Link>
        </div>
      </Section>
    </div>
  )
}

/* ---------- small local presentational helpers ---------- */

function Section({
  id,
  eyebrow,
  heading,
  children,
}: {
  id?: string
  eyebrow: string
  heading: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-14 first:pt-0">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
        {eyebrow}
      </p>
      <h2 className="mt-2 mb-5 text-2xl font-black text-white md:text-3xl">
        {heading}
      </h2>
      {children}
    </section>
  )
}

function Stat({
  value,
  label,
  detail,
}: {
  value: string
  label: string
  detail?: string
}) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-navy-card p-4 text-center">
      <div className="font-mono text-3xl font-bold text-teal-bright">
        {value}
      </div>
      <div className="mt-1 text-sm text-fog">{label}</div>
      {detail ? <div className="mt-1 text-xs text-haze">{detail}</div> : null}
    </div>
  )
}

function Requirements({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-navy-card p-5">
      <h3 className="text-base font-bold text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-mist">
            <span className="text-teal-bright" aria-hidden>
              ·
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Callout({
  icon: Icon,
  className,
  children,
}: {
  icon: typeof Info
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`flex gap-3 rounded-lg border border-gold/30 bg-gold/[0.06] p-5 ${className ?? ""}`}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
      <p className="text-sm leading-relaxed text-fog">{children}</p>
    </div>
  )
}

function TrackGroup({
  title,
  items,
  lang,
  copy,
}: {
  title: string
  items: EkopartyChallenge[]
  lang: Lang
  copy: EkopartyCopy
}) {
  if (items.length === 0) return null
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-mist">
        {title}
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((challenge) => (
          <EkopartyChallengeCard
            key={challenge.challengeId}
            challenge={challenge}
            lang={lang}
            copy={copy}
          />
        ))}
      </div>
    </div>
  )
}
