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
  announcementEnabled: true,
  announcementText:
    "Challenge container images are public on GitHub — build your sandbox and pull the images before you travel.",
  announcementUrl: "/setup",
  ctfPlatformName: "MetaCTF",
  ctfPlatformUrl: "https://mctf.io/btv",
  discordUrl: "https://discord.gg/blueteamvillage",
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

/*
 * Scenario briefings are deliberately neutral: they describe what was observed
 * and what has to be established, without naming the cause. The earlier
 * one-line summaries gave the answer away ("a valid signature does not prove a
 * trustworthy release path"), which is the finding, not the brief.
 */
export const fallbackScenarios: Scenario[] = [
  {
    title: "S01 · Cloud-to-OT Control Plane Compromise",
    situation:
      "An OT gateway began issuing unexpected control traffic shortly after a new cloud-managed deployment was pushed to the site. Initial review suggests the activity originated through the cloud control plane rather than from a workstation inside the plant network.",
    objective:
      "Correlate identity, deployment, IoT registry, gateway, and packet-capture evidence to determine how the change reached the controller and what action occurred.",
    order: 1,
  },
  {
    title: "S02 · The Silent Historian",
    situation:
      "External monitoring detected a pressure anomaly, but the historian — the primary operational system of record — shows normal values throughout the same period. A remote management session and subsequent host activity occurred near the affected window.",
    objective:
      "Determine whether the physical process changed, whether the historian data remained trustworthy, and how remote access may have been used to alter or conceal the event.",
    order: 2,
  },
  {
    title: "S03 · The Poisoned Pipeline",
    situation:
      "An edge-system update passed through the organization's normal CI/CD workflow and was deployed using trusted infrastructure. Soon afterward, downstream telemetry began behaving unexpectedly.",
    objective:
      "Trace the build, signing, artifact-integrity, deployment, and telemetry records to determine whether the delivered package matched what the pipeline was expected to produce, and where the chain of trust failed.",
    order: 3,
  },
  {
    title: "S04 · The Exposed Controller",
    situation:
      "An externally reachable industrial-management interface recorded a successful authentication followed by configuration activity and an operator alert. There is no obvious evidence of a prolonged password attack.",
    objective:
      "Determine how the interface was accessed, whether the authentication was legitimate, what controller parameters changed, and what observable effect followed inside the operational environment.",
    order: 4,
  },
  {
    title: "S05 · The Frosted Loop",
    situation:
      "A refrigeration-control loop began drifting outside its normal temperature and pressure range even though the network traffic appeared valid for the industrial protocol in use. No obvious malformed command or conventional exploit is present.",
    objective:
      "Correlate controller events, sensor readings, authorization context, and process timelines to determine how valid-looking activity produced an unauthorized operational change.",
    order: 5,
  },
  {
    title: "S06 · The Ghost VPN",
    situation:
      "A remote-access appliance recorded a successful privileged VPN session followed by internal discovery, engineering-document access, and activity near OT-adjacent systems. The session used valid credentials, and the initial access does not resemble a conventional software exploit.",
    objective:
      "Establish how the account was used, what operational knowledge was exposed, and how the activity progressed beyond the remote-access boundary.",
    order: 6,
  },
  {
    title: "S07 · The Living Tenant",
    situation:
      "A valid administrative account connected during an unusual time window and began accessing systems through normal remote-management and file-sharing protocols. The traffic resembles legitimate administrative work, but the account behavior, accessed resources, and persistence indicators do not match the expected user profile.",
    objective:
      "Distinguish routine administration from adversary activity conducted through trusted credentials and familiar tools.",
    order: 7,
  },
  {
    title: "S08 · The Carrier Shadow",
    situation:
      "A remote field site experienced a temporary loss of SCADA visibility after activity involving its cellular carrier connection. During the gap, the historian continued to display apparently normal values.",
    objective:
      "Correlate carrier, gateway, SCADA polling, historian, and timing evidence to determine whether the continuity was genuine, inferred, or deliberately used to conceal activity during the loss of visibility.",
    order: 8,
  },
  {
    title: "S09 · The Vendor Tunnel",
    situation:
      "A trusted vendor's remote-management platform was used to access customer endpoints outside the expected support pattern. Suspicious endpoint activity and staging behavior followed, but the connection arrived through an approved administrative channel.",
    objective:
      "Determine how the vendor relationship was abused, which endpoint actions were performed, and how trusted RMM access altered the normal authentication and detection path.",
    order: 9,
  },
  {
    title: "S10 · The Hypervisor Blackout",
    situation:
      "Multiple virtual machines across more than one host went offline during a coordinated infrastructure event. Backup and snapshot activity occurred near the outage, followed by guest-system encryption indicators and widespread service disruption.",
    objective:
      "Reconstruct the sequence across the virtualization, storage, backup, and guest layers to determine why the impact occurred simultaneously and whether recovery options were deliberately removed.",
    order: 10,
  },
]

export const fallbackSetupSections: SetupSection[] = [
  {
    title: "Build the sandbox (before the con)",
    tier: "everyone",
    order: 1,
    body: [
      "Everything runs in a local Kubernetes sandbox you build yourself, and [btv-k8s-sandbox-infrastructure](https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure) is the install guide — with paved paths for **macOS, Windows, and Linux**. Whichever OS you're on, you end up with the same thing: a Docker-backed VM, a single-node minikube cluster (`dc34`), plus Cilium (networking + policy), Tetragon (eBPF runtime telemetry), Kyverno (guardrails), and metrics-server.",
      "",
      "**Install Git first.** Every path below starts by cloning the sandbox repo, so you need Git on your machine before anything else — GitHub's [install guide](https://github.com/git-guides/install-git) covers macOS, Windows, and Linux. Already have it? Confirm with `git --version`; any recent release is fine.",
      "",
      "Then pick your OS and run the block top to bottom.",
      "",
      "**macOS** — [Homebrew](https://brew.sh) is the only other prerequisite; make installs the rest (minikube, kubectl, helm, helmfile, k9s, colima, docker CLI):",
      "",
      "```",
      "git clone https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure.git",
      "cd btv-k8s-sandbox-infrastructure",
      "make tools && make up",
      "```",
      "",
      "**Windows 10/11** — winget + Docker Desktop (WSL2 engine); full walkthrough and troubleshooting in [windows/README.md](https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure/blob/main/windows/README.md). Run the first three lines, then start Docker Desktop and open a new terminal before the last one:",
      "",
      "```",
      "git clone https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure.git",
      "cd btv-k8s-sandbox-infrastructure",
      "windows\\start.cmd tools",
      "windows\\start.cmd up",
      "```",
      "",
      "**Linux** — install minikube, kubectl, helm, and helmfile with your package manager, then start the same profile:",
      "",
      "```",
      "git clone https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure.git",
      "cd btv-k8s-sandbox-infrastructure",
      "minikube start -p dc34 --driver=docker --cpus=4 --memory=6144 --cni=cilium --addons=metrics-server",
      "helmfile sync",
      "```",
      "",
      "Budget ~4 CPU cores, 8 GB RAM, and ~20 GB of disk. Do this **before** you get to the venue: the first run takes several minutes, and DEF CON internet is famously unreliable. `make stop` (Windows: `windows\\start.cmd stop`) pauses the cluster with state preserved. Stuck? Ask in the BTV Discord.",
    ].join("\n"),
  },
  {
    title: "Get the challenge images",
    tier: "everyone",
    order: 2,
    body: [
      "Challenges are distributed as public container images from the Blue Team Village org on GitHub — one image per challenge, `ghcr.io/blueteamvillage/challenge-<NNN>`. Browse the full set on the [packages page](https://github.com/orgs/blueteamvillage/packages). Standalone challenges also ship **`-beginner`** and **`-pro`** variants; pick the track that fits you.",
      "",
      "**No login, no credentials.** The packages are public, so there's nothing to authenticate against and nothing to collect at the village. Applying a challenge manifest pulls the image for you — the pod spec references it directly, and `imagePullPolicy: IfNotPresent` falls back to the public package whenever it isn't already cached locally:",
      "",
      "```",
      "kubectl --context dc34 apply -f challenges/challenge-000.pod.yaml",
      "```",
      "",
      "**Pull ahead of time anyway.** DEF CON internet is famously unreliable, so pre-pull at home and side-load into your `dc34` cluster — then the con network never sits between you and a challenge:",
      "",
      "```",
      "docker pull ghcr.io/blueteamvillage/challenge-000:latest",
      "minikube -p dc34 image load ghcr.io/blueteamvillage/challenge-000:latest",
      "```",
    ].join("\n"),
  },
  {
    title: "Deploy & investigate",
    tier: "everyone",
    order: 3,
    body: [
      "Every challenge is a ready-to-apply manifest in the [`challenges/`](https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure/tree/main/challenges) directory of the sandbox repo — each one is self-contained, so a single apply creates the challenge's namespace and its pod:",
      "",
      "```",
      "kubectl --context dc34 apply -f challenges/challenge-000.pod.yaml",
      "kubectl --context dc34 -n challenge-000 get pods",
      "```",
      "",
      "Then dig into the evidence — poke around inside the pod, or copy the artifacts out to your machine:",
      "",
      "```",
      "kubectl --context dc34 -n challenge-000 exec -it challenge-000 -- sh",
      "kubectl --context dc34 -n challenge-000 cp challenge-000:/forensics ./challenge-000-forensics",
      "```",
      "",
      "There are two kinds of manifest. **Standalone** challenges (`challenge-<NNN>.pod.yaml`) each get their own namespace. **Converged Frontier scenarios** (`challenge-001-s<NNN>-*.challenge.pod.yaml`) — ten scenarios in `-beginner` and `-pro` variants — all share the `converged-frontier` namespace and run side by side. To remove one, delete the pod (`kubectl -n <ns> delete pod <name>`); avoid `kubectl delete -f` on a Converged Frontier file, since it tears down the shared namespace and every scenario pod with it.",
      "",
      "Tetragon streams kernel-level events — process execs, network connections — from every workload (`kubectl --context dc34 logs -n kube-system ds/tetragon -c export-stdout -f`), and `k9s --context dc34` gives you a TUI over the whole cluster. That's telemetry you can hunt in. Submit your findings as flags on MetaCTF.",
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
      "- The sandbox guardrails (restricted Pod Security, default-deny networking, resource caps) come pre-provisioned by `make tools & make up` — they're features, not bugs",
    ].join("\n"),
  },
]

export const fallbackSponsors: Sponsor[] = [
  {
    name: "Hack The Box",
    tier: "platinum",
    url: "https://www.hackthebox.com/",
    blurb:
      "Equip threat-ready cyber teams for an AI-accelerated landscape with hands-on labs, assessments, and pathways that build top performing teams.",
    logo: {
      url: "https://images.ctfassets.net/mgfsp0s6h7v2/6mxNhdwA95hwceRpnRhmGA/e5a06bee47e3510f485005e797527c55/Hack_The_Box_Logo_2.png",
      alt: "Hack the Box",
      width: 4267,
      height: 2560,
    },
    order: 1,
    active: true,
  },
  {
    name: "TryHackMe",
    tier: "gold",
    url: "https://tryhackme.com/",
    blurb: "Hands-on cyber security training through real-world scenarios",
    logo: {
      url: "https://images.ctfassets.net/mgfsp0s6h7v2/3LAThx0ryfYlWHsslU7JJa/718fc1dd76a23e1d4b5cc9adaf487958/image.png",
      alt: "TryHackMe",
      width: 439,
      height: 247,
    },
    order: 2,
    active: true,
  },
  {
    name: "Expel",
    tier: "gold",
    url: "https://expel.com/",
    blurb:
      "Agentic MDR means AI speed, without tradeoffs. Tech makes you fast. Humans make you accurate. You keep your tools, your visibility, and your control.",
    logo: {
      url: "https://images.ctfassets.net/mgfsp0s6h7v2/75AbHB4jIG9ZTjLNaJchpg/e48b157b673291681b96eab4c28c9a00/image.png",
      alt: "Expel",
      width: 251,
      height: 80,
    },
    order: 2,
    active: true,
  },
  {
    name: "Detection Engineering Weekly",
    tier: "gold",
    url: "https://www.detectionengineering.net/",
    blurb: "The latest news and how-tos in detection engineering",
    logo: {
      url: "https://images.ctfassets.net/mgfsp0s6h7v2/7hdWHGpOSrzt0290ZUvFde/8659038ea2910a205c75e417f9c025a6/3deba0ef-a8ae-4617-b3c3-231a8636dc72_512x512.webp",
      alt: "Detection Engineering Weekly",
      width: 512,
      height: 512,
    },
    order: 2,
    active: true,
  },
  {
    name: "DeepTempo",
    tier: "gold",
    url: "https://www.deeptempo.ai/",
    blurb:
      "DeepTempo helps security teams identify modern attacks earlier using AI-powered behavioral detection. Built to work alongside existing SIEM, NDR, and telemetry environments, DeepTempo detects attacker intent and suspicious behavioral patterns that traditional rules, signatures, and static baselines often miss.",
    logo: {
      url: "https://images.ctfassets.net/mgfsp0s6h7v2/yA1vIIjgc7cXjDum3uLiL/0e801561ea38b7be2c73a20be763ba6a/image.png",
      alt: "DeepTempo",
      width: 570,
      height: 142,
    },
    order: 3,
    active: true,
  },
]

export const fallbackFaqItems: FaqItem[] = [
  {
    question: "Do I need to be at DEF CON to play?",
    answer:
      "The CTF is run for DEF CON 34 attendees at the Blue Team Village, and flag submission happens on MetaCTF. You can build the whole environment ahead of time: the sandbox repo and the challenge images are both public, so there are no credentials to collect at the village. Check the rules page for eligibility details.",
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
      "Clone [btv-k8s-sandbox-infrastructure](https://github.com/blueteamvillage/btv-k8s-sandbox-infrastructure) **before** you arrive and follow the install path for your OS — `make tools && make up` on macOS, `windows\\start.cmd` on Windows, or the documented minikube/helmfile commands on Linux. The tooling installs itself; you end up with the same `dc34` sandbox cluster everywhere. The challenge images are public on GitHub, so pull them before you travel rather than depending on con Wi-Fi. The setup page has the full walkthrough.",
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
