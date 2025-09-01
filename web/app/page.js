import Hero from "@/components/Hero/Hero"
import Features from "@/components/Features/Features"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <section
        id="cta"
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="text-center opacity-70">CTA section placeholder</div>
      </section>
    </main>
  )
}
