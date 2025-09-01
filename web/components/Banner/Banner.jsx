"use client"

import { useEffect, useState, useCallback } from "react"

/**
 * Dismissible “Built on Wix” style banner.
 * - Fixed bottom-right on screen.
 * - Persists dismissal in localStorage ("mio.banner.closed" = "1").
 * - Accessible: button has aria-label and keyboard support.
 */
export default function Banner() {
  const STORAGE_KEY = "mio.banner.closed"
  const [isClosed, setIsClosed] = useState(false)
  const [mounted, setMounted] = useState(false)

  // On first client render, read localStorage to decide if we should show.
  useEffect(() => {
    const closed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1"
    setIsClosed(closed)
    setMounted(true)
  }, [])

  const handleClose = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "1")
    } catch {}
    setIsClosed(true)
  }, [])

  if (!mounted || isClosed) return null

  return (
    <div className="fixed right-5 bottom-5 z-50">
      <div
        className="flex items-center gap-2 rounded border border-gray-200 bg-white px-2 py-1 shadow-md
                   text-sm leading-5"
        role="status"
        aria-live="polite"
      >
        <span className="select-none">Built on</span>
        <WixWordmark className="h-4 w-auto" />
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close banner"
          className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded hover:bg-gray-100
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <CloseIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

function CloseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6l8 8M14 6l-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Simple Wix wordmark (clean, lightweight). You can swap to the full SVG later if you prefer.
 */
function WixWordmark({ className = "" }) {
  return (
    <div className={`font-semibold tracking-tight ${className}`} aria-label="Wix">
      WIX
    </div>
  )
}
