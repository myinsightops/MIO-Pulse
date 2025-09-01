export default function Hero() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24 grid gap-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Insightful ops, zero fuss.
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg opacity-80">
            MyInsightOps helps you orchestrate data, automate tasks, and ship faster—
            with a clean interface and smart defaults.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#cta" className="px-5 py-2.5 rounded-xl font-medium shadow hover:shadow-md transition">
              Get started
            </a>
            <a href="#features" className="text-sm underline underline-offset-4 hover:opacity-80">
              See features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
