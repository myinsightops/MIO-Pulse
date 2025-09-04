export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid gap-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Operations clarity, without the noise
          </h1>

          <p className="mx-auto max-w-2xl text-base md:text-lg text-black/70">
            See the numbers that matter, align your teams, and ship decisions
            faster—built for hospitality operators.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="/signup"
              className="px-5 py-2.5 rounded-xl font-medium shadow-sm hover:shadow transition bg-black text-white"
            >
              Start free
            </a>
            <a
              href="#features"
              className="text-sm md:text-base underline underline-offset-4 hover:opacity-80"
            >
              View features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
