'use client'

import { useState } from 'react'
import InvoiceForm from './InvoiceForm'
import InvoicePreview from './InvoicePreview'
import styles from './InvoiceGenerator.module.css'

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

export interface InvoiceData {
  invoiceNumber: string
  invoiceDate: string
  billTo: string
  items: InvoiceItem[]
  notes: string
  terms: string
}

export default function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: '',
    invoiceDate: new Date().toISOString().split('T')[0],
    billTo: '',
    items: [],
    notes: 'It was great doing business with you.',
    terms: 'No return deal, Thank you.',
  })

  const updateInvoiceData = (data: Partial<InvoiceData>) => {
    setInvoiceData((prev) => ({ ...prev, ...data }))
  }

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0,
    }
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }))
  }

  const removeItem = (id: string) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }))
  }

  const updateItem = (id: string, updates: Partial<InvoiceItem>) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, ...updates }
          updated.amount = updated.quantity * updated.rate
          return updated
        }
        return item
      }),
    }))
  }

  const totalAmount = invoiceData.items.reduce(
    (sum, item) => sum + item.amount,
    0
  )

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Invoice Generator</h1>
      <div className={styles.content}>
        <InvoiceForm
          invoiceData={invoiceData}
          updateInvoiceData={updateInvoiceData}
          addItem={addItem}
          removeItem={removeItem}
          updateItem={updateItem}
        />
        <InvoicePreview invoiceData={invoiceData} totalAmount={totalAmount} />
      </div>
    </div>
  )
}

