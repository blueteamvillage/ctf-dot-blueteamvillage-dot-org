import type { Metadata } from "next"

import { Faq } from "@/components/dc34/faq"
import { getFaqItems } from "@/lib/contentful/queries"

export const metadata: Metadata = {
  title: "FAQ | BTV CTF @ DEF CON 34",
  description: "Common questions about the Blue Team Village CTF at DEF CON 34.",
}

export default async function FaqPage() {
  const items = await getFaqItems()

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mint">
        Questions
      </p>
      <h1 className="mt-2 text-4xl font-black text-white md:text-5xl">FAQ</h1>
      <p className="mt-4 leading-relaxed text-mist">
        Can&apos;t find your answer? Ask in the village or on the Blue Team
        Village Discord.
      </p>

      <div className="mt-10">
        <Faq items={items} />
      </div>
    </div>
  )
}
