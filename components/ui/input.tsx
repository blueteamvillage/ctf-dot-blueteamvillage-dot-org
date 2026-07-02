import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "placeholder:text-haze selection:bg-teal selection:text-white border-white/10 bg-navy-deep text-fog flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-2xs transition-[color,box-shadow] outline-hidden file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-teal-bright focus-visible:ring-teal-bright/30 focus-visible:ring-[3px]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
