# EComm Micro - E-Commerce Microservices Platform

A comprehensive, scalable e-commerce platform built with a microservices architecture using modern technologies including Next.js, TypeScript, Express, Fastify, Stripe, and Apache Kafka for event-driven communication.

## 🎯 Overview

EComm Micro is a full-stack e-commerce solution that demonstrates enterprise-level architecture patterns including:

- **Microservices Architecture**: Independently deployable services for auth, products, orders, and payments
- **Event-Driven Communication**: Apache Kafka for asynchronous inter-service communication
- **Monorepo Structure**: Using Turbo and pnpm workspaces for efficient development and builds
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Modern UI**: React 19 with Next.js 15 for customer and admin interfaces

## 📁 Project Structure

```
ecom-micro/
├── apps/                          # Application packages
│   ├── admin/                     # Admin dashboard (Next.js)
│   ├── client/                    # Customer-facing app (Next.js)
│   ├── auth-service/              # Authentication service (Express)
│   ├── product-service/           # Product management (Express)
│   ├── order-service/             # Order management (Fastify)
│   ├── payment-service/           # Payment processing (Hono)
│   └── email-service/             # Email notifications (Node.js)
│
└── packages/                       # Shared packages
    ├── types/                     # Shared TypeScript types & schemas
    ├── kafka/                     # Kafka client wrapper
    ├── product-db/                # Product database (Prisma)
    ├── order-db/                  # Order database (Mongoose)
    ├── eslint-config/             # Shared ESLint configuration
    └── typescript-config/         # Shared TypeScript configuration
```

## 🏗️ Architecture

### Frontend Applications

#### **Admin Dashboard** (`apps/admin`)
- **Port**: 3003
- **Framework**: Next.js 15 with Turbopack
- **Purpose**: Comprehensive management interface for admins
- **Key Features**:
  - User management and profiles
  - Payment tracking and monitoring
  - Real-time analytics with interactive charts
  - Dark mode support
  - Data tables with pagination and filtering
  - Responsive sidebar navigation
- **Tech**: React 19, Tailwind CSS 4, Radix UI, TanStack React Table, Recharts
- **Authentication**: Clerk

#### **Customer Client** (`apps/client`)
- **Port**: 3002
- **Framework**: Next.js 15 with Turbopack
- **Purpose**: Modern e-commerce storefront (STEEZY)
- **Key Features**:
  - Product catalog browsing
  - Product search and filtering
  - Shopping cart management (Zustand)
  - Checkout flow
  - Responsive mobile-first design
- **Tech**: React 19, Tailwind CSS 4, Zustand, React Hook Form
- **Authentication**: Clerk
- **Payments**: Stripe integration

### Backend Services

#### **Auth Service** (`apps/auth-service`)
- **Port**: Not specified (requires configuration)
- **Framework**: Express.js
- **Purpose**: Handle user authentication and authorization
- **Tech**: Express, Clerk SDK, Kafka Producer/Consumer
- **Database**: External (Clerk)
- **Communication**: HTTP API, Kafka events

#### **Product Service** (`apps/product-service`)
- **Port**: 8000
- **Framework**: Express.js
- **Purpose**: Manage products and categories
- **Endpoints**:
  - `GET /health` - Health check
  - `GET /test` - Auth verification
  - `GET/POST /products` - Product management
  - `GET/POST /categories` - Category management
- **Tech**: Express, Prisma (via product-db), Clerk, Kafka
- **Database**: Product DB (Prisma with PostgreSQL)
- **Communication**: HTTP API, Kafka events
- **Authentication**: Clerk middleware

#### **Order Service** (`apps/order-service`)
- **Port**: 8001
- **Framework**: Fastify
- **Purpose**: Manage orders and order processing
- **Endpoints**:
  - `GET /health` - Health check
  - `GET /test` - Auth verification
  - `GET/POST /orders` - Order management
- **Tech**: Fastify, Mongoose (via order-db), Clerk, Kafka
- **Database**: Order DB (MongoDB with Mongoose)
- **Communication**: HTTP API, Kafka events
- **Authentication**: Clerk plugin
- **Features**: Kafka subscription handling for order events

#### **Payment Service** (`apps/payment-service`)
- **Port**: Configured in environment
- **Framework**: Hono (Lightweight web framework)
- **Purpose**: Handle payment processing and Stripe integration
- **Tech**: Hono, Stripe SDK, Clerk Auth, Kafka
- **Key Features**:
  - Payment processing
  - Stripe webhook handling
  - Kafka producer for payment events
- **Authentication**: Clerk authentication middleware
- **Communication**: HTTP API, Kafka events

#### **Email Service** (`apps/email-service`)
- **Framework**: Node.js
- **Purpose**: Send email notifications based on events
- **Tech**: Nodemailer, Kafka Consumer
- **Features**:
  - Event-driven email sending
  - Kafka subscription for email triggers
  - Supports transactional and notification emails

### Shared Packages

#### **Types** (`packages/types`)
- **Purpose**: Centralized TypeScript types and Zod schemas
- **Exports**: Auth types, Product types, Cart types, Order types
- **Dependencies**: Product-DB, Order-DB for type references

#### **Kafka** (`packages/kafka`)
- **Purpose**: Kafka client wrapper for producer/consumer operations
- **Exports**: `createKafkaClient()`, `createProducer()`, `createConsumer()`
- **Tech**: kafkajs library
- **Usage**: Inter-service event communication

#### **Product DB** (`packages/product-db`)
- **Purpose**: Product database abstraction layer
- **Tech**: Prisma ORM with PostgreSQL
- **Scripts**:
  - `db:generate` - Generate Prisma client
  - `db:migrate` - Run database migrations
  - `db:deploy` - Deploy migrations to production
- **Exports**: Prisma client and utilities

#### **Order DB** (`packages/order-db`)
- **Purpose**: Order database abstraction layer
- **Tech**: Mongoose ODM with MongoDB
- **Exports**: MongoDB connection and models

#### **ESLint Config** (`packages/eslint-config`)
- **Purpose**: Shared linting rules
- **Configs**: base.js, next.js, react-internal.js

#### **TypeScript Config** (`packages/typescript-config`)
- **Purpose**: Shared TypeScript configuration
- **Configs**: base.json, nextjs.json, react-library.json

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18+ (required by package.json)
- **pnpm**: 9.0.0 (specified in package.json)
- **Docker**: For Kafka and databases (if using docker-compose)

### Installation

```bash
# Install dependencies
pnpm install

# Install pnpm globally if not already installed
npm install -g pnpm@9.0.0
```

### Environment Setup

Create `.env` files in the root and in service directories:

```bash
# Root .env
DATABASE_URL=postgresql://user:password@localhost:5432/ecomm_products
MONGODB_URL=mongodb://localhost:27017/ecomm_orders
KAFKA_BROKERS=localhost:9092

# Admin (.env.local)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

# Client (.env.local)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
STRIPE_SECRET_KEY=...

# Auth Service (.env)
CLERK_WEBHOOK_SECRET=...
KAFKA_BROKERS=localhost:9092

# Product Service (.env)
DATABASE_URL=postgresql://...
KAFKA_BROKERS=localhost:9092

# Order Service (.env)
MONGODB_URL=mongodb://localhost:27017/ecomm_orders
KAFKA_BROKERS=localhost:9092

# Payment Service (.env)
STRIPE_SECRET_KEY=...
KAFKA_BROKERS=localhost:9092
```

### Running Locally

#### Start all services in development mode:
```bash
pnpm dev
```

This uses Turbo to orchestrate all development servers in parallel:
- Admin: http://localhost:3003
- Client: http://localhost:3002
- Product Service: http://localhost:8000
- Order Service: http://localhost:8001
- Payment Service: (configured port)

#### Start specific services:
```bash
# Start only admin
pnpm dev --filter admin

# Start only client
pnpm dev --filter client

# Start only product service
pnpm dev --filter product-service
```

### Docker Setup

#### Start Kafka and databases:
```bash
cd packages/kafka
docker-compose up -d
```

This starts:
- Kafka broker on localhost:9092
- Zookeeper on localhost:2181

## 🔧 Build & Deployment

### Build all projects:
```bash
pnpm build
```

### Type checking across all projects:
```bash
pnpm check-types
```

### Linting:
```bash
pnpm lint
```

### Code formatting:
```bash
pnpm format
```

## 📊 Database Architecture

### PostgreSQL (Product DB)
- **Purpose**: Product and category data
- **ORM**: Prisma
- **Migrations**: Located in `packages/product-db/prisma/migrations`
- **Schema**: Defined in `packages/product-db/prisma/schema.prisma`

### MongoDB (Order DB)
- **Purpose**: Order and transaction history
- **ODM**: Mongoose
- **Models**: Defined in `packages/order-db/src/order-model.ts`

## 🔄 Event-Driven Architecture

### Kafka Topics and Flows

Services communicate asynchronously through Kafka:

```
Order Service → [order.created] → Email Service (send confirmation)
                               → Payment Service (trigger payment)

Product Service → [product.updated] → Cache update
                                    → Notifications

Payment Service → [payment.completed] → Order Service (update status)
                                     → Email Service (send receipt)
```

### Kafka Configuration

- **Brokers**: Configured via `KAFKA_BROKERS` environment variable
- **Client**: Centralized in `packages/kafka/src/`
- **Producer**: For services publishing events
- **Consumer**: For services subscribing to events

## 👥 Authentication & Authorization

### Clerk Integration
All services use **Clerk** for authentication:
- Frontend apps: `@clerk/nextjs`
- Express services: `@clerk/express`
- Fastify: `@clerk/fastify`
- Hono: `@hono/clerk-auth`

### Protected Routes
Services implement middleware to protect endpoints:
- `shouldBeUser`: Middleware to verify user is authenticated
- Extracted from request context as `userId`

## 💳 Payment Processing

### Stripe Integration
- **Service**: Payment Service
- **Client**: `@stripe/stripe-js`, `@stripe/react-stripe-js`
- **Server**: Stripe Node.js SDK
- **Workflow**:
  1. Frontend initiates payment with Stripe token
  2. Payment Service processes through Stripe
  3. Publishes `payment.completed` event to Kafka
  4. Order Service consumes and updates status
  5. Email Service sends receipt

## 📦 Package Manager & Monorepo

### Turbo Configuration
- **Task Pipeline**: Defined in `turbo.json`
- **Caching**: Intelligent build caching
- **Parallel Execution**: Multiple tasks run concurrently
- **Dependency Graph**: Respects workspace dependencies

### pnpm Workspaces
- Efficient disk space usage with symlinks
- Fast installation
- Strict dependency management

## 🛠️ Tech Stack Summary

### Frontend
| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 15.x |
| Runtime | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| State (Client) | Zustand | 5.x |
| Forms | React Hook Form | 7.x |
| Validation | Zod | 4.x |
| UI Components | Radix UI | Latest |
| Data Tables | TanStack React Table | 8.x |
| Charts | Recharts | 2.x |
| Authentication | Clerk | Latest |
| Payments | Stripe | Latest |

### Backend
| Layer | Technology | Service |
|-------|-----------|---------|
| Auth Framework | Express | auth-service |
| Product Framework | Express | product-service |
| Order Framework | Fastify | order-service |
| Payment Framework | Hono | payment-service |
| Email Runtime | Node.js | email-service |
| Message Broker | Kafka/kafkajs | Inter-service |
| Product DB | Prisma + PostgreSQL | product-db |
| Order DB | Mongoose + MongoDB | order-db |
| Authentication | Clerk | Global |

### Development Tools
| Tool | Purpose |
|------|---------|
| Turbo | Monorepo orchestration |
| pnpm | Package manager |
| TypeScript | Type safety |
| ESLint | Code linting |
| Prettier | Code formatting |
| tsx | TypeScript execution |

## 🔐 Security Features

- **Type Safety**: Full TypeScript implementation prevents runtime errors
- **Authentication**: Clerk handles user identity and verification
- **Authorization**: Middleware validation on protected routes
- **Input Validation**: Zod schemas validate all user inputs
- **CORS**: Configured for frontend origins
- **Environment Variables**: Sensitive data stored in `.env` files

## 📈 Scalability Considerations

1. **Microservices**: Independent scaling per service
2. **Database Separation**: Separate DBs prevent bottlenecks
3. **Kafka**: Decouples services for async processing
4. **Caching**: Turbo caching reduces rebuild time
5. **CDN**: Static assets can be served from CDN
6. **Load Balancing**: Services can be load-balanced independently

## 📝 API Endpoints Reference

### Product Service (Port 8000)
- `GET /health` - Service health check
- `GET /test` - Auth verification test
- `GET/POST /products` - Product operations
- `GET/POST /categories` - Category operations

### Order Service (Port 8001)
- `GET /health` - Service health check
- `GET /test` - Auth verification test
- `GET/POST /orders` - Order operations

### Payment Service
- Payment endpoint (varies by config)
- Webhook endpoint for Stripe

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes with type safety
3. Run type check: `pnpm check-types`
4. Run linting: `pnpm lint`
5. Format code: `pnpm format`
6. Commit with clear messages
7. Push and create pull request

## 📄 License

ISC License - See individual package.json files for details

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Environment Variables
Set all required environment variables for:
- Database URLs (PostgreSQL, MongoDB)
- Kafka brokers
- Clerk credentials
- Stripe keys
- Email service credentials

### Docker Deployment
Services can be containerized using Dockerfile configurations. Ensure all services are registered in a service discovery mechanism or docker-compose orchestration.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com)
- [Fastify Documentation](https://www.fastify.io)
- [Kafka Documentation](https://kafka.apache.org/documentation)
- [Prisma Docs](https://www.prisma.io/docs)
- [Mongoose Docs](https://mongoosejs.com)
- [Clerk Documentation](https://clerk.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)

---

**Last Updated**: December 2025
**Node Version**: 18+
**Package Manager**: pnpm 9.0.0
