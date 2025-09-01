export default function Home() {
  return (
    <main className="min-h-dvh grid place-items-center p-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-blue-600">
          Hello Tailwind v4 👋
        </h1>
        <p className="text-base opacity-80">
          If you can see this styled text, Tailwind v4 is active.
        </p>
        <button className="px-4 py-2 rounded-xl font-medium shadow hover:shadow-lg transition">
          Test Button
        </button>
      </div>
    </main>
  )
}