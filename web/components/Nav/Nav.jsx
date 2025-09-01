"use client"

import { useState, useCallback } from "react"

/**
 * Responsive header with brand left, links right, and a mobile menu.
 * Accessible: proper aria attributes and focus styles.
 */
export default function Nav() {
  const [open, setOpen] = useState(false)
  const toggle = useCallback(() => setOpen(v => !v), [])
  const close = useCallback(() => setOpen(false), [])

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 group" onClick={close}>
            <span className="text-base font-semibold tracking-tight group-hover:opacity-80">
              MyInsightOps
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:opacity-80">Features</a>
            <a href="#contact" className="text-sm hover:opacity-80">Contact</a>
            <a
              href="#cta"
              className="text-sm font-medium px-3 py-1.5 rounded-xl shadow hover:shadow-md transition"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation"
            aria-controls="mio-mobile-menu"
            aria-expanded={open ? "true" : "false"}
            onClick={toggle}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div
            id="mio-mobile-menu"
            className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2"
          >
            <nav className="grid gap-1">
              <a
                href="#features"
                onClick={close}
                className="rounded px-3 py-2 text-sm hover:bg-gray-100"
              >
                Features
              </a>
              <a
                href="#contact"
                onClick={close}
                className="rounded px-3 py-2 text-sm hover:bg-gray-100"
              >
                Contact
              </a>
              <a
                href="#cta"
                onClick={close}
                className="rounded px-3 py-2 text-sm font-medium shadow hover:shadow-md transition text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function MenuIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
