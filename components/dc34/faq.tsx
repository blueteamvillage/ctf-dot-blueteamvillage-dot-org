import { ChevronDown } from "lucide-react"

import { Markdown } from "@/components/dc34/markdown"
import type { FaqItem } from "@/lib/contentful/types"

/*
 * Zero-JS accordion — native <details>/<summary>.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.order}
          className="group rounded-lg border border-white/[0.06] bg-navy-card open:border-teal/30"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-white [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              className="h-4 w-4 shrink-0 text-teal-bright transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="px-5 pb-5 text-sm">
            <Markdown>{item.answer}</Markdown>
          </div>
        </details>
      ))}
    </div>
  )
}
