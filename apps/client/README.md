# STEEZY Clothing Store

A modern, modular e-commerce frontend built with **Next.js 15**, **React 19**, and **TypeScript**. This project provides reusable UI components and features for building scalable e-commerce applications.

## Features

- 🛒 **Shopping Cart Management** - Persistent cart state using Zustand
- 📦 **Product Catalog** - Browse and filter products by category
- 🔍 **Product Search** - Full-text search functionality
- 💳 **Checkout Flow** - Shipping and payment form components
- 📱 **Responsive Design** - Mobile-first UI with Tailwind CSS
- ⚡ **Performance Optimized** - Next.js with Turbopack for fast development
- ✅ **Form Validation** - React Hook Form with Zod schema validation
- 🎨 **Component Library** - Reusable, well-structured components

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **State Management**: [Zustand](https://zustand-demo.vercel.app)
- **Form Handling**: [React Hook Form](https://react-hook-form.com)
- **Validation**: [Zod](https://zod.dev)
- **Icons**: [Lucide React](https://lucide.dev)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- **Linting**: [ESLint](https://eslint.org)

## Getting Started

### Prerequisites

- Node.js 18.17+
- pnpm (or npm/yarn/bun)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecom-micro-ui
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The app will auto-reload as you edit files.

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── cart/
│   │   └── page.tsx         # Shopping cart page
│   ├── products/
│   │   ├── page.tsx         # Product listing page
│   │   └── [id]/
│   │       └── page.tsx     # Product detail page
│   └── globals.css          # Global styles
├── components/               # Reusable UI components
│   ├── Categories.tsx       # Product category filter
│   ├── Filter.tsx           # Product filters
│   ├── ProductCard.tsx      # Product display card
│   ├── ProductList.tsx      # Product list container
│   ├── ProductInteraction.tsx
│   ├── SearchBar.tsx        # Search functionality
│   ├── ShoppingCartIcon.tsx # Cart icon with badge
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── ShippingForm.tsx     # Shipping form
│   └── PaymentForm.tsx      # Payment form
├── stores/                   # Zustand store configurations
│   └── cartStore.ts         # Cart state management
└── types.ts                 # TypeScript type definitions
```

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Key Components

### CartStore
Centralized cart state management with Zustand for managing shopping cart items and operations.

### Product Components
- **ProductCard** - Individual product display
- **ProductList** - Grid/list of products
- **Filter** - Product filtering options
- **Categories** - Category navigation

### Forms
- **ShippingForm** - Collect shipping information with validation
- **PaymentForm** - Handle payment details

### Navigation
- **Navbar** - Top navigation with search
- **SearchBar** - Product search functionality
- **ShoppingCartIcon** - Cart access with item count badge

## Development

### Code Style
- TypeScript for type safety
- ESLint configuration for code consistency
- Component-based architecture

### Form Validation
Forms use React Hook Form with Zod for runtime validation and TypeScript inference.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## License

MIT
