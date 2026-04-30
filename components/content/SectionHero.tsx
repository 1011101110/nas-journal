interface SectionHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function SectionHero({ eyebrow, title, description, children }: SectionHeroProps) {
  return (
    <section className="border-b border-warm-200 bg-warm-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sage-700">{eyebrow}</p>
        )}
        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
