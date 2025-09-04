export default function Features() {
  const items = [
    {
      title: "Daily clarity",
      desc: "Revenue, covers, and workhorse days surfaced—no manual hunting.",
    },
    {
      title: "Upload & map fast",
      desc: "Drop CSVs or connect POS/PMS. Normalized once, used everywhere.",
    },
    {
      title: "Permissioned access",
      desc: "RLS-first. See only what you’re allowed to see—per property.",
    },
    {
      title: "Forecasts that help",
      desc: "Simple baselines today, smarter signals tomorrow. Transparent.",
    },
  ];

  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid gap-2 text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Built for operators, not hobbyists
          </h2>
          <p className="mx-auto max-w-2xl text-black/70">
            The essentials—clear, fast, and proven. No fluff.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {items.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 p-5 sm:p-6 shadow-sm hover:shadow transition"
            >
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
