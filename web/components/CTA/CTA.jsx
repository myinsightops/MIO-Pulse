export default function CTA() {
  return (
    <section id="cta" className="bg-sand">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-4 sm:gap-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to orchestrate your ops?
          </h2>
          <p className="mx-auto max-w-2xl opacity-80">
            Connect workflows, see insights, and automate the busywork.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="/signup" className="px-5 py-2.5 rounded-xl font-medium shadow hover:shadow-md transition bg-brand text-brand-foreground">
              Get started free
            </a>
            <a href="#features" className="text-sm underline underline-offset-4 hover:opacity-80">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
