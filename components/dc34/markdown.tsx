import { isValidElement } from "react"
import ReactMarkdown from "react-markdown"

import { CodeBlock } from "@/components/dc34/code-block"

/*
 * Flatten a rendered node tree back to plain text. Code fences arrive as
 * <pre><code>…</code></pre>, so this recovers the raw command text to hand to
 * the copy button.
 */
function nodeToText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return ""
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(nodeToText).join("")
  if (isValidElement(node)) {
    return nodeToText((node.props as { children?: React.ReactNode }).children)
  }
  return ""
}

/*
 * react-markdown hands every override its hast `node`. Drop it before the
 * spread so it doesn't land on the DOM as node="[object Object]".
 */
function omitNode<T extends { node?: unknown }>(props: T): Omit<T, "node"> {
  const rest = { ...props }
  delete rest.node
  return rest
}

/*
 * Server-rendered markdown for Contentful bodies. Element styling is mapped by
 * hand to DC34 tokens (no typography plugin). The only client JS is the copy
 * button on code fences.
 */
export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        p: (props) => <p className="text-fog leading-relaxed [&:not(:first-child)]:mt-4" {...omitNode(props)} />,
        strong: (props) => <strong className="font-bold text-white" {...omitNode(props)} />,
        em: (props) => <em className="italic" {...omitNode(props)} />,
        a: ({ href, ...props }) => (
          <a
            href={href}
            className="text-teal-bright underline underline-offset-4 hover:text-mint transition-colors"
            {...(href?.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...omitNode(props)}
          />
        ),
        ul: (props) => <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-teal" {...omitNode(props)} />,
        ol: (props) => <ol className="mt-4 space-y-2 pl-5 list-decimal marker:text-teal" {...omitNode(props)} />,
        li: (props) => <li className="text-fog leading-relaxed" {...omitNode(props)} />,
        code: (props) => (
          <code
            className="rounded-sm bg-navy-deep border border-white/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-mint"
            {...omitNode(props)}
          />
        ),
        pre: ({ children, ...props }) => (
          // pr-14 keeps long lines from sliding under the copy button.
          <CodeBlock code={nodeToText(children)}>
            <pre
              className="mt-4 overflow-x-auto rounded-lg border border-white/[0.06] bg-navy-deep p-4 pr-14 font-mono text-sm text-fog [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-fog"
              {...omitNode(props)}
            >
              {children}
            </pre>
          </CodeBlock>
        ),
        h2: (props) => <h2 className="mt-6 text-xl font-bold text-white" {...omitNode(props)} />,
        h3: (props) => <h3 className="mt-6 text-lg font-bold text-white" {...omitNode(props)} />,
        img: ({ alt, ...props }) => (
          // Contentful bodies reference static screenshots of unknown
          // dimensions, so next/image (which requires them) isn't an option.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={alt ?? ""}
            loading="lazy"
            className="mt-4 w-full rounded-lg border border-white/[0.06]"
            {...omitNode(props)}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
