import ReactMarkdown from "react-markdown"

/*
 * Server-rendered markdown for Contentful bodies — zero client JS. Element
 * styling is mapped by hand to DC34 tokens (no typography plugin).
 */
export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        p: (props) => <p className="text-fog leading-relaxed [&:not(:first-child)]:mt-4" {...props} />,
        strong: (props) => <strong className="font-bold text-white" {...props} />,
        em: (props) => <em className="italic" {...props} />,
        a: ({ href, ...props }) => (
          <a
            href={href}
            className="text-teal-bright underline underline-offset-4 hover:text-mint transition-colors"
            {...(href?.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            {...props}
          />
        ),
        ul: (props) => <ul className="mt-4 space-y-2 pl-5 list-disc marker:text-teal" {...props} />,
        ol: (props) => <ol className="mt-4 space-y-2 pl-5 list-decimal marker:text-teal" {...props} />,
        li: (props) => <li className="text-fog leading-relaxed" {...props} />,
        code: (props) => (
          <code
            className="rounded-sm bg-navy-deep border border-white/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-mint"
            {...props}
          />
        ),
        pre: (props) => (
          <pre
            className="mt-4 overflow-x-auto rounded-lg border border-white/[0.06] bg-navy-deep p-4 font-mono text-sm text-fog [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-fog"
            {...props}
          />
        ),
        h2: (props) => <h2 className="mt-6 text-xl font-bold text-white" {...props} />,
        h3: (props) => <h3 className="mt-6 text-lg font-bold text-white" {...props} />,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
