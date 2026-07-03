import type {
  ChallengeTrack,
  EventInfo,
  FaqItem,
  Scenario,
  SetupSection,
  SiteSettings,
  Sponsor,
} from "@/lib/contentful/types"

/*
 * Checked-in defaults for every content model. These are the seed source of
 * truth for the Contentful space and the fallback when env vars are missing
 * or Contentful is unreachable — the site must always build without network.
 *
 * Content guardrail: participant-safe framing only. Scenario entries carry
 * titles and theme-level one-liners — never flag values, answer keys, IOC
 * tables, scenario internals, or anything organizer-only.
 */

export const fallbackSiteSettings: SiteSettings = {
  announcementEnabled: false,
  announcementText: "",
  announcementUrl: "",
  ctfPlatformName: "MetaCTF",
  ctfPlatformUrl: "https://compete.metactf.com/634/",
  discordUrl: "https://discord.gg/blueteamvillage",
  downloadsUrl: "https://s3.us-west-2.amazonaws.com/media.blueteamvillage.org/index.html",
}

export const fallbackEventInfo: EventInfo = {
  name: "DEF CON 34",
  dates: "August 7–9, 2026",
  startsAt: "2026-08-07T10:00:00-07:00",
  venue: "Las Vegas Convention Center · Las Vegas, NV",
  status: "upcoming",
  badgeRequired: true,
  tagline:
    "Central hub for the forensic analysis of malware in containerized environments.",
}

export const fallbackTracks: ChallengeTrack[] = [
  {
    title: "Container & Malware Forensics",
    slug: "container-malware-forensics",
    summary:
      "Pull down a container and work out what the malware did. Choose the safe forensic snapshot or the live-malware sandbox.",
    body: [
      "The core of Project Obsidian: forensic analysis of malware activity inside container images. Every challenge runs locally in a sandboxed Kubernetes environment — no live cloud dependency, DEF CON-Wi-Fi friendly.",
      "",
      "**Option A — Forensic Snapshot (safe).** Post-analysis images with the evidence baked in read-only. You analyze artifacts; nothing detonates. The right starting point for most participants.",
      "",
      "**Option B — Live Malware (advanced).** A real Linux sample detonates fully confined inside Kubernetes while eBPF telemetry (Tetragon) captures every process event. Egress is denied by default (Cilium) and policy is enforced with Kyverno. Read the setup warnings before you choose this path.",
    ].join("\n"),
    skillTiers: ["Beginner", "Intermediate", "Expert"],
    icon: "container",
    order: 1,
  },
  {
    title: "Cloud Attack Forensics",
    slug: "cloud-attack-forensics",
    summary:
      "Reconstruct what happened during real attack vectors against cloud infrastructure.",
    body: [
      "A second set of challenges focuses on attack vectors against cloud infrastructure. Piece together control-plane events, identity activity, and service telemetry to determine how an attacker moved — and prove it with evidence.",
    ].join("\n"),
    skillTiers: ["Beginner", "Intermediate", "Expert"],
    icon: "cloud",
    order: 2,
  },
  {
    title: "Converged Frontier",
    slug: "converged-frontier",
    summary:
      "A ten-scenario cloud-to-OT incident-reconstruction campaign. Correlate evidence across domains and build a defensible timeline.",
    body: [
      "Modern incidents don't stay in one domain. *Converged Frontier* is a ten-scenario campaign spanning cloud control planes, identity systems, CI/CD, OT gateways, network telemetry, endpoints, vendor access paths, backups, and virtualization infrastructure.",
      "",
      "Each scenario is self-contained but shares one operational problem: distinguish primary cause from downstream effect, and produce a defensible incident timeline. Two parallel tracks — **Beginner** (clear starting points, guided materials) and **Pro** (full noise, decoys, cross-domain clock drift) — cover the same scenario themes with independent evidence bundles.",
    ].join("\n"),
    skillTiers: ["Beginner", "Expert"],
    icon: "campaign",
    order: 3,
  },
]

export const fallbackScenarios: Scenario[] = [
  {
    title: "S01 · Cloud-to-OT Control Plane Compromise",
    oneLiner:
      "How cloud control-plane abuse produced a downstream OT effect without any direct intrusion into the OT network.",
    order: 1,
  },
  {
    title: "S02 · The Silent Historian",
    oneLiner:
      "Reconcile telemetry gaps against gateway and process-state evidence when the system of record itself can't be trusted.",
    order: 2,
  },
  {
    title: "S03 · The Poisoned Pipeline",
    oneLiner:
      "A CI/CD and signed-artifact investigation: a valid signature does not prove a trustworthy release path.",
    order: 3,
  },
  {
    title: "S04 · The Exposed Controller",
    oneLiner:
      "Separate an authentication failure from an asset-inventory failure on an externally exposed controller.",
    order: 4,
  },
  {
    title: "S05 · The Frosted Loop",
    oneLiner:
      "A process-control disruption correlated across gateway, register, sensor, firewall, dashboard, and maintenance evidence.",
    order: 5,
  },
  {
    title: "S06 · The Ghost VPN",
    oneLiner:
      "Appliance-mediated compromise: separate legitimate remote access from persistence and misuse.",
    order: 6,
  },
  {
    title: "S07 · The Living Tenant",
    oneLiner:
      "Windows-native living-off-the-land activity across identity, VPN, RDP/WinRM/SMB, scheduled tasks, shares, and backups.",
    order: 7,
  },
  {
    title: "S08 · The Carrier Shadow",
    oneLiner:
      "A telecom-layer compromise that degrades OT visibility and SCADA polling continuity.",
    order: 8,
  },
  {
    title: "S09 · The Vendor Tunnel",
    oneLiner:
      "Vendor-mediated access with downstream customer impact — scope the incident across both environments.",
    order: 9,
  },
  {
    title: "S10 · The Hypervisor Blackout",
    oneLiner:
      "A virtualization control-plane disruption where guest-OS encryption is a symptom, not the scope.",
    order: 10,
  },
]

export const fallbackSetupSections: SetupSection[] = [
  {
    title: "Prerequisites",
    tier: "everyone",
    order: 1,
    body: [
      "Everything runs locally in Kubernetes — download once, investigate offline. Install:",
      "",
      "- **Docker** — loads the provided image archives",
      "- **minikube** — local Kubernetes cluster (use a profile/context named `dc34`)",
      "- **kubectl** — pointed at the `dc34` context",
      "- **colima** — Linux VM backend if you're on macOS / Apple Silicon",
      "- **make** — the provided `Makefile` wraps load, deploy, status, and exec",
      "",
      "On Apple Silicon, use minikube's Docker runtime: `eval $(minikube -p dc34 docker-env)`.",
    ].join("\n"),
  },
  {
    title: "Download & load the containers",
    tier: "everyone",
    order: 2,
    body: [
      "Challenge images ship as OCI image-layout `.tar.gz` archives with SHA-256 checksums. Grab the bundle for your track from the downloads link (also pinned on the MetaCTF platform), verify, and load — don't extract:",
      "",
      "```",
      "shasum -a 256 -c converged-frontier-participant-beginner-images.tar.gz.sha256",
      "gunzip -c converged-frontier-participant-beginner-images.tar.gz | docker load",
      "```",
      "",
      "Do this **before** you get to the venue if you can — DEF CON internet is famously unreliable, and the archives are large.",
    ].join("\n"),
  },
  {
    title: "Deploy & investigate",
    tier: "everyone",
    order: 3,
    body: [
      "Deploy the scenario pods into the `converged-frontier` namespace and start digging:",
      "",
      "```",
      "make deploy        # or: kubectl apply -k .",
      "make status",
      "kubectl exec -it <your-scenario-pod> -n converged-frontier -- sh",
      "```",
      "",
      "Inside the pod, the evidence lives at `/challenge/` — start with `README.md` and `forensic-report.md`, then work through `evidence/`. Submit your findings as flags on MetaCTF.",
    ].join("\n"),
  },
  {
    title: "Live-malware sandbox (advanced)",
    tier: "advanced",
    order: 4,
    body: [
      "The live-malware path detonates a **real Linux malware sample** fully confined inside Kubernetes: egress-denied networking (Cilium default-deny), a dedicated namespace with no host volumes and no service-account token, eBPF process telemetry via Tetragon, and Kyverno policy enforcement. The sample detonates under a bounded timeout and self-wipes, so your analysis targets residual impact and telemetry.",
      "",
      "**Handle with care:**",
      "",
      "- Samples ship in encrypted, password-protected archives — your AV/EDR *will* (correctly) flag them",
      "- Never extract samples outside the isolated sandbox",
      "- Never push these images to a public registry",
      "- Sandbox stack (Cilium, Tetragon, Kyverno) is provisioned via helm/helmfile — full instructions ship with the environment repo",
    ].join("\n"),
  },
]

export const fallbackSponsors: Sponsor[] = [
  { name: "Your logo here", tier: "blue", url: "", blurb: "Blue-tier sponsorship — TBD", order: 1, active: true },
  { name: "Your logo here", tier: "platinum", url: "", blurb: "Platinum-tier sponsorship — TBD", order: 2, active: true },
  { name: "Your logo here", tier: "gold", url: "", blurb: "Gold-tier sponsorship — TBD", order: 3, active: true },
  { name: "Your logo here", tier: "community", url: "", blurb: "Community supporter — TBD", order: 4, active: true },
]

export const fallbackFaqItems: FaqItem[] = [
  {
    question: "Do I need to be at DEF CON to play?",
    answer:
      "The CTF is run for DEF CON 34 attendees at the Blue Team Village. Challenge submission happens on MetaCTF, and the container bundles are downloadable ahead of time — check the rules page for eligibility details.",
    order: 1,
  },
  {
    question: "Is this safe to run on my laptop?",
    answer:
      "The default path uses **forensic snapshots** — read-only, pre-generated evidence with nothing live in it. The optional live-malware track runs a real sample, but only inside an egress-denied, policy-enforced Kubernetes sandbox. If you're unsure, stick to snapshots; they're the intended experience for most players.",
    order: 2,
  },
  {
    question: "What skill level do I need?",
    answer:
      "Challenges are explicitly tiered Beginner / Intermediate / Expert, and Converged Frontier ships parallel Beginner and Pro evidence bundles. If you can read a log file, there's a lane for you.",
    order: 3,
  },
  {
    question: "What should I install before the con?",
    answer:
      "Docker, minikube, kubectl, and make (plus colima on macOS). Then download and `docker load` the challenge bundles **before** you arrive — DEF CON internet is unreliable and the archives are large. The setup page has the full walkthrough.",
    order: 4,
  },
  {
    question: "Where do I submit flags?",
    answer:
      "On MetaCTF — this is our first year on the platform (we used CTFd previously). The link is on the home page; registration details land closer to the event.",
    order: 5,
  },
  {
    question: "Can I play solo or do I need a team?",
    answer:
      "Both work. Team size limits and scoring details are on the rules page.",
    order: 6,
  },
  {
    question: "Where was last year's site?",
    answer:
      "The DEF CON 33 site is preserved in the [archive](/archive/dc33) exactly as it shipped.",
    order: 7,
  },
]
