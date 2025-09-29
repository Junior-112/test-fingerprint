"use client"

import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { useEffect, useState } from "react"

export async function getFingerprint() {
  const fp = await FingerprintJS.load()
  const result = await fp.get()
  return result.visitorId // unique browser/device ID
}

export default function Home() {
  const [fingerprint, setFingerprint] = useState<string | null>(null)

  async function fetchFingerprint() {
    const id = await getFingerprint()
    setFingerprint(id)
  }
  useEffect(() => {
    fetchFingerprint()
  }, [])

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Fingerprint</h1>
        <p>{fingerprint}</p>
      </main>
    </div>
  )
}
