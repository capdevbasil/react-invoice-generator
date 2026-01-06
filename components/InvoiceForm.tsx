"use client";

import { InvoiceData, InvoiceItem } from "./InvoiceGenerator";
import styles from "./InvoiceForm.module.css";

interface InvoiceFormProps {
  invoiceData: InvoiceData;
  updateInvoiceData: (data: Partial<InvoiceData>) => void;
  addItem: () => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, updates: Partial<InvoiceItem>) => void;
}

export default function InvoiceForm({
  invoiceData,
  updateInvoiceData,
  addItem,
  removeItem,
  updateItem,
}: InvoiceFormProps) {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Invoice Details</h2>

      <div className={styles.formGroup}>
        <label htmlFor="invoiceNumber">Invoice Number</label>
        <input
          type="text"
          id="invoiceNumber"
          value={invoiceData.invoiceNumber}
          onChange={(e) => updateInvoiceData({ invoiceNumber: e.target.value })}
          placeholder="INV-001"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="invoiceDate">Invoice Date</label>
        <input
          type="date"
          id="invoiceDate"
          value={invoiceData.invoiceDate}
          onChange={(e) => updateInvoiceData({ invoiceDate: e.target.value })}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="billTo">Bill To</label>
        <textarea
          id="billTo"
          value={invoiceData.billTo}
          onChange={(e) => updateInvoiceData({ billTo: e.target.value })}
          placeholder="Client name and address"
          rows={4}
        />
      </div>

      <div className={styles.itemsSection}>
        <div className={styles.itemsHeader}>
          <h3>Items</h3>
          <button type="button" onClick={addItem} className={styles.addButton}>
            + Add Item
          </button>
        </div>

        {invoiceData.items.map((item) => (
          <div key={item.id} className={styles.itemRow}>
            <input
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) =>
                updateItem(item.id, { description: e.target.value })
              }
              className={styles.itemInput}
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.quantity || ""}
              onChange={(e) =>
                updateItem(item.id, { quantity: Number(e.target.value) || 0 })
              }
              className={styles.itemInputSmall}
              min="0"
            />
            <input
              type="number"
              placeholder="Rate"
              value={item.rate || ""}
              onChange={(e) =>
                updateItem(item.id, { rate: Number(e.target.value) || 0 })
              }
              className={styles.itemInputSmall}
              min="0"
              step="0.01"
            />
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={invoiceData.notes}
          onChange={(e) => updateInvoiceData({ notes: e.target.value })}
          rows={3}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="terms">Terms & Conditions</label>
        <textarea
          id="terms"
          value={invoiceData.terms}
          onChange={(e) => updateInvoiceData({ terms: e.target.value })}
          rows={3}
        />
      </div>
    </div>
  );
}
