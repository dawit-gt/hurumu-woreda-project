# Hurumu Woreda Administration API
NestJS · PostgreSQL · Prisma · JWT Auth

---

## Quick Start (Windows + macOS + Linux)

### 1. Prerequisites
- Node.js 18+ → https://nodejs.org
- PostgreSQL 14+ → https://www.postgresql.org/download/
- Git (optional)

### 2. Create the database
Open pgAdmin or psql and run:
```sql
CREATE DATABASE hurumu_woreda_db;
```

### 3. Configure environment
Copy the example file and fill in your values:
```
copy .env.example .env        # Windows
cp .env.example .env          # macOS/Linux
```

Then open `.env` and set:
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/hurumu_woreda_db"
JWT_ACCESS_SECRET=any_long_random_string_here
JWT_REFRESH_SECRET=another_long_random_string_here
```

### 4. Install dependencies
```bash
npm install
```

### 5. Generate Prisma client
```bash
npx prisma generate
```

### 6. Run database migrations
```bash
npx prisma migrate dev --name init
```

### 7. Seed the database
```bash
npx ts-node prisma/seed.ts
```

> **Windows note:** If you get `'ts-node' is not recognized`, run:
> ```bash
> npm install -g ts-node
> npx ts-node prisma/seed.ts
> ```
> Or use the npm script:
> ```bash
> npm run db:seed:win
> ```

### 8. Start the server
```bash
# Development (with hot reload)
npm run start:dev

# Production
npm run build
npm run start:prod
```

---

## URLs
| Service | URL |
|---|---|
| API base | http://localhost:3001/api/v1 |
| Swagger docs | http://localhost:3001/api/docs |
| Prisma Studio | `npx prisma studio` → http://localhost:5555 |

---

## Seed credentials
```
Email:    superadmin@hurumu.pro.et
Password: Admin@Hurumu2026!
```

---

## Available npm scripts
| Script | What it does |
|---|---|
| `npm run start:dev` | Start with hot reload |
| `npm run build` | Compile TypeScript |
| `npm run start:prod` | Run compiled build |
| `npx prisma generate` | Generate Prisma client (run after schema changes) |
| `npx prisma migrate dev` | Apply migrations in development |
| `npx prisma migrate deploy` | Apply migrations in production |
| `npx ts-node prisma/seed.ts` | Seed the database |
| `npx prisma studio` | Open visual database browser |

---

## API Modules
| Module | Public endpoints | Protected endpoints |
|---|---|---|
| Auth | POST /auth/login, /auth/register, /auth/refresh | POST /auth/logout |
| News | GET /news, GET /news/:slug | POST/PATCH/DELETE /news |
| Departments | GET /departments, GET /departments/:slug | POST/PATCH/DELETE |
| Services | GET /services, GET /services/:slug, POST /services/:id/apply | POST/PATCH/DELETE |
| Documents | GET /documents | POST/PATCH/DELETE |
| Kebeles | GET /kebeles | POST/PATCH/DELETE |
| Users | — | GET/PATCH /users/me, GET /users (admin) |

---

## Project structure
```
hurumu-api/
├── prisma/
│   ├── schema.prisma      ← Database schema (all models)
│   └── seed.ts            ← Database seed data
├── src/
│   ├── auth/              ← JWT auth (login, register, refresh, logout)
│   ├── users/             ← User management
│   ├── news/              ← News & announcements
│   ├── departments/       ← Woreda departments
│   ├── services/          ← Citizen services + applications
│   ├── documents/         ← Transparency documents
│   ├── kebeles/           ← Kebele administration
│   ├── prisma/            ← PrismaService (DB client)
│   ├── common/
│   │   ├── decorators/    ← @CurrentUser, @Public, @Roles
│   │   ├── guards/        ← JwtAuthGuard, RolesGuard
│   │   ├── filters/       ← Global exception filter
│   │   ├── interceptors/  ← Response wrapper
│   │   └── enums.ts       ← Shared enum types
│   ├── app.module.ts      ← Root module
│   └── main.ts            ← Bootstrap + Swagger
└── .env.example           ← Environment template
```
