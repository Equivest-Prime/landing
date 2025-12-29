import React from 'react'

export default function Header({ subtitle, title, className }: { subtitle: string; title: string; className?: string }) {
    return (
        <div className={className}>
            <span
                className="text-muted-foreground text-lg mb-4 block"
                style={{
                    fontFamily: "var(--font-instrument)",
                    fontStyle: "italic",
                }}
            >
                {subtitle}
            </span>
            <span className="text-3xl md:text-4xl lg:text-4xl font-semibold tracking-tighter leading-[1.1] capitalize">
                {title}
            </span>
        </div>
    )
}
