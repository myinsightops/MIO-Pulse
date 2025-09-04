export default function CTA() {
  return (
    <section id="cta" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-5 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Ready to orchestrate your ops?
          </h2>

          <p className="mx-auto max-w-2xl text-base lg:text-lg text-black/70">
            Connect workflows, see insights, and automate the busywork.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="/signup"
              className="px-5 py-2.5 rounded-xl font-medium shadow-sm hover:shadow transition
                         bg-black text-white"
            >
              Get started free
            </a>
            <a
              href="#features"
              className="text-sm lg:text-base underline underline-offset-4 hover:opacity-80"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
