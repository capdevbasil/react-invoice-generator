'use client'

import { InvoiceData } from './InvoiceGenerator'
import styles from './InvoicePreview.module.css'

interface InvoicePreviewProps {
  invoiceData: InvoiceData
  totalAmount: number
}

export default function InvoicePreview({
  invoiceData,
  totalAmount,
}: InvoicePreviewProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    const day = date.getDate().toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${month} ${day}, ${year}`
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className={styles.previewContainer}>
      <div className={styles.previewActions}>
        <button onClick={handlePrint} className={styles.printButton}>
          Print / Save as PDF
        </button>
      </div>
      
      <div className={styles.invoice}>
        <div className={styles.invoiceHeader}>
          <h1 className={styles.invoiceTitle}>INVOICE</h1>
        </div>

        <div className={styles.invoiceDetails}>
          <div className={styles.billToSection}>
            <h3 className={styles.sectionLabel}>Bill To:</h3>
            <div className={styles.billToContent}>
              {invoiceData.billTo || (
                <span className={styles.placeholder}>Client details</span>
              )}
            </div>
          </div>

          <div className={styles.invoiceInfo}>
            <div className={styles.invoiceNumber}>
              <span className={styles.label}>Invoice#</span>
              <span className={styles.value}>
                {invoiceData.invoiceNumber || '---'}
              </span>
            </div>
            <div className={styles.invoiceDate}>
              <span className={styles.label}>Invoice Date</span>
              <span className={styles.value}>
                {formatDate(invoiceData.invoiceDate)}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.itemsTable}>
          <div className={styles.tableHeader}>
            <div className={styles.tableCell}>Item Description</div>
            <div className={styles.tableCell}>Qty</div>
            <div className={styles.tableCell}>Rate</div>
            <div className={styles.tableCell}>Amount</div>
          </div>

          {invoiceData.items.length === 0 ? (
            <div className={styles.emptyTable}>
              <p>No items added yet</p>
            </div>
          ) : (
            invoiceData.items.map((item) => (
              <div key={item.id} className={styles.tableRow}>
                <div className={styles.tableCell}>{item.description || '-'}</div>
                <div className={styles.tableCell}>{item.quantity || 0}</div>
                <div className={styles.tableCell}>
                  {item.rate ? `Rs. ${item.rate.toFixed(2)}` : '-'}
                </div>
                <div className={styles.tableCell}>
                  {item.amount ? `Rs. ${item.amount.toFixed(2)}` : '-'}
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.totalSection}>
          <div className={styles.totalBox}>
            <span className={styles.totalLabel}>TOTAL</span>
            <span className={styles.totalAmount}>
              Rs. {totalAmount.toFixed(2)}
            </span>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.notesSection}>
            <h3 className={styles.sectionLabel}>Notes</h3>
            <p className={styles.notesContent}>{invoiceData.notes}</p>
          </div>

          <div className={styles.termsSection}>
            <h3 className={styles.sectionLabel}>Terms & Conditions</h3>
            <p className={styles.termsContent}>{invoiceData.terms}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

