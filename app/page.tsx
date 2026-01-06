'use client'

import InvoiceGenerator from '@/components/InvoiceGenerator'

export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <InvoiceGenerator />
    </main>
  )
}

