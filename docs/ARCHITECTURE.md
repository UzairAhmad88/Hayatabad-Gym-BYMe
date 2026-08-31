# Architecture

```text
Browser
  ↓
Next.js App Router
  ↓
Reusable Components
  ↓
Server/API Routes
  ↓
Validation
  ↓
Prisma
  ↓
PostgreSQL
```

External services such as WhatsApp, maps, email, analytics, and payments should be isolated behind configuration/integration modules.
