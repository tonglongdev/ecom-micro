# Ecom Micro Admin

A modern, feature-rich admin dashboard for ecommerce. Built with [Next.js](https://nextjs.org) 15, React 19, and TypeScript, providing a comprehensive management interface for users, payments, and business analytics.

## Features

- **User Management** - View, search, and manage user accounts with detailed user profiles
- **Payment Tracking** - Monitor and manage payment transactions with advanced data tables
- **Analytics Dashboard** - Real-time insights with interactive charts (area, bar, line, and pie charts)
- **Dark Mode Support** - Built-in theme switching with Next Themes
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **Form Validation** - Robust form handling with React Hook Form and Zod
- **Data Tables** - Powerful table components with TanStack React Table for pagination and filtering
- **Sidebar Navigation** - Collapsible sidebar for easy navigation

## Tech Stack

- **Framework:** Next.js 15 with App Router and Turbopack
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Component Library:** Radix UI
- **Form Management:** React Hook Form + Zod
- **Data Visualization:** Recharts
- **Tables:** TanStack React Table
- **Theme:** Next Themes with Dark Mode support
- **Type Safety:** TypeScript
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn/bun)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The page will auto-update as you edit files. Fast refresh is enabled with Turbopack for optimal development experience.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Dashboard home
│   ├── payments/       # Payment management
│   └── users/          # User management
├── components/         # Reusable React components
│   ├── ui/            # Shadcn UI components
│   └── providers/     # Context providers (Theme)
└── lib/               # Utility functions
```

## Available Scripts

```bash
# Development
pnpm run dev          # Start dev server with Turbopack

# Production
pnpm run build        # Build for production
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
```

## Key Pages

- **Dashboard** - Main analytics and overview page (`/`)
- **Users** - User management interface (`/users`)
- **User Details** - Individual user profile (`/users/[username]`)
- **Payments** - Payment transaction tracking (`/payments`)

## Development

The project uses ESLint for code quality and follows Next.js best practices. TypeScript ensures type safety throughout the application.

To modify components, edit files in the `src/components` directory. To add new pages, create them in the `src/app` directory following Next.js conventions.

## License

This project is private.
