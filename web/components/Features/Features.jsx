/**
 * Features section: responsive grid with 3 cards.
 * Icons are inline SVGs for now — you can swap them later.
 */
export default function Features() {
  const features = [
    {
      name: "Real-time Insights",
      description:
        "Track metrics and performance live with simple dashboards powered by your data.",
      icon: ChartIcon,
    },
    {
      name: "Workflow Automation",
      description:
        "Connect tools and let repetitive tasks run automatically with n8n integrations.",
      icon: ZapIcon,
    },
    {
      name: "Secure Data",
      description:
        "Your operations data stays safe with Supabase RLS and region-specific hosting.",
      icon: LockIcon,
    },
  ]

  return (
    <section
      id="features"
      className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Powerful features, minimal fuss
        </h2>
        <p className="mt-3 text-base sm:text-lg opacity-80 max-w-2xl mx-auto">
          Everything you need to run smoothly — without the clutter.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.name}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <f.icon className="h-8 w-8 mb-4 text-blue-600" />
            <h3 className="font-semibold text-lg mb-2">{f.name}</h3>
            <p className="text-sm opacity-80 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ChartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12h2v7H5v-7zm6-5h2v12h-2V7zm6 8h2v4h-2v-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ZapIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 10V8a6 6 0 1112 0v2M6 10h12v10H6V10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
