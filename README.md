# Invoice Generator

A modern, responsive invoice generator built with Next.js and React. Generate professional invoices with an itemized list, automatic calculations, and print/PDF export functionality.

## Features

- Clean, minimalist invoice design
- Add/remove invoice items dynamically
- Automatic total calculation
- Print and save as PDF
- Responsive design for mobile and desktop
- Easy to customize invoice details

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click Deploy

The app will be deployed and you'll get a live URL!

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── InvoiceGenerator.tsx    # Main component
│   ├── InvoiceForm.tsx         # Form for editing invoice
│   ├── InvoicePreview.tsx      # Invoice preview/print view
│   └── *.module.css            # Component styles
└── package.json
```

## Usage

1. Fill in the invoice details (Invoice Number, Date, Bill To)
2. Add items with description, quantity, and rate
3. The total amount is calculated automatically
4. Customize notes and terms & conditions
5. Click "Print / Save as PDF" to generate the invoice

## Technologies

- Next.js 14
- React 18
- TypeScript
- CSS Modules

