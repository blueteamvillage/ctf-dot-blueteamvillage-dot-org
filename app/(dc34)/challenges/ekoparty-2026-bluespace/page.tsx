import type { Metadata } from "next"

import { EkopartyClient } from "@/components/dc34/ekoparty-client"
import { getEkopartyChallenges } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "BTV CTF @ EkoParty 2026 | Blue Team Village",
  description:
    "Blue Team Village's defensive CTF at BlueSpace, EkoParty Buenos Aires, October 7–9, 2026 — malware forensics, an incident-response capstone, and an OSINT/GEOSINT track. Scored in SkillBit.",
  openGraph: {
    title: "BTV CTF @ EkoParty 2026 — BlueSpace Argentina",
    description:
      "Malware forensics, incident response, and OSINT at BlueSpace. Buenos Aires, October 7–9, 2026.",
    url: "https://ctf.blueteamvillage.org/challenges/ekoparty-2026-bluespace",
    locale: "es_AR",
  },
}

/*
 * Server component: Contentful stays server-side, and the page still
 * prerenders statically. The language toggle and challenge filters live in
 * EkopartyClient, which is the only client boundary on the route.
 */
export default async function EkoParty2026Page() {
  const challenges = await getEkopartyChallenges()

  return <EkopartyClient challenges={challenges} />
}
