export default function Footer() {
  return (
    <footer className="bg-espresso text-white mt-16" id="contact">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">MyInsightOps</div>
            <p className="mt-2 text-sm/6 opacity-80">
              Orchestrate workflows and insights—without the clutter.
            </p>
          </div>
          <nav className="grid gap-2">
            <div className="font-medium">Product</div>
            <a href="#features" className="text-sm/6 hover:opacity-90">Features</a>
            <a href="#cta" className="text-sm/6 hover:opacity-90">Get Started</a>
          </nav>
          <nav className="grid gap-2">
            <div className="font-medium">Company</div>
            <a href="/#about" className="text-sm/6 hover:opacity-90">About</a>
            <a href="/#contact" className="text-sm/6 hover:opacity-90">Contact</a>
          </nav>
          <div className="grid gap-2">
            <div className="font-medium">Follow</div>
            <div className="flex gap-3">
              <a aria-label="Twitter" href="#" className="hover:opacity-90">X</a>
              <a aria-label="GitHub" href="#" className="hover:opacity-90">GitHub</a>
              <a aria-label="LinkedIn" href="#" className="hover:opacity-90">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-xs/6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} MyInsightOps. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:opacity-90">Privacy</a>
            <a href="/terms" className="hover:opacity-90">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
