<p align="center">
    <img src='https://raw.githubusercontent.com/alevnyacow/springnext/refs/heads/main/logo.svg?sanitize=true'></img>
</p>
<p align="center">
    Next.js with Spring-level robustness and powerful scaffolding — no Java involved.
</p>
<p align="center">
    <b>Works inside plain Next.js — no framework lock-in.</b>
</p>
<p align="center">
  <a href="https://badge.fury.io/js/springnext" target="_blank"><img src='https://badge.fury.io/js/springnext.svg'></img></a>
  <img src='https://img.shields.io/npm/l/springnext'></img>
</p>

# 🌱 About

## What is SpringNext?

SpringNext is a CLI that generates a full backend architecture inside Next.js (controllers, services, API) and React query hooks in seconds, providing *zero-config* infrastructure like DI, unified errors, API controllers, and in-memory or Prisma stores.

It is **not** a framework — Next.js already has routing and a powerful runtime. SpringNext is a tool to supercharge Next.js, giving you fast full-stack scaffolding while staying fully within its ecosystem.

## Who is it for?

- Developers and teams with experience in enterprise backend development (.NET, Spring) who want a similar architecture from Next.js with maximum developer experience (DX)
- Startups: a combination of instant prototyping and easily scalable/extendable code
- Teams that want to write code and deliver quickly while staying within a single architecture

# ⚡ Try it in 30 seconds

```bash
# Install (SpringNext + required deps)
npm i inversify zod reflect-metadata springnext
# Initialize
npx sn init prismaClientPath:@/generated/prisma/client
# Scaffold CRUD and entity
npx sn crud-api user
```

```bash
📁 Generated structure:

# Entity
├── domain/entities/user/user.entity.ts
├── domain/entities/user/index.ts

# Controller
├── server/controllers/user/user.controller.metadata.ts
├── server/controllers/user/user.controller.ts
├── server/controllers/user/index.ts

# Stores - contract, RAM implementation, Prisma implementation
├── server/stores/user/user.store.ts
├── server/stores/user/user.store.ram.ts
├── server/stores/user/user.store.prisma.ts
├── server/stores/user/index.ts

# Service
├── server/services/user/user.service.metadata.ts
├── server/services/user/user.service.ts
├── server/services/user/index.ts

# API routes
├── app/api/user-controller/route.ts
├── app/api/user-controller/details/route.ts

# React Query hooks
├── ui/shared/queries/user/endpoints/DELETE.ts
├── ui/shared/queries/user/endpoints/details_GET.ts
├── ui/shared/queries/user/endpoints/GET.ts
├── ui/shared/queries/user/endpoints/PATCH.ts
├── ui/shared/queries/user/endpoints/POST.ts
├── ui/shared/queries/user/endpoints/index.ts
├── ui/shared/queries/user/index.ts
```

Describe your entity and stores in scaffolded files:

- `/domain/entities/user/user.entity.ts` → entity schema
- `/server/stores/user/user.store.ts` → store schemas (if default schemas do not fit your needs)
- `/server/stores/user/user.store.prisma.ts` → map `UserStore` contracts to Prisma client contracts

→ Full backend + API + frontend hooks — ready in seconds

# 🧪 Live playground

https://stackblitz.com/edit/springnext-playground

Everything is ready for your experiments there. Have fun!

*Best experienced in Chrome. StackBlitz support in Safari may vary.*

# 🔮 Motivation

Building a backend by hand takes hours. Frameworks solve this with runtime abstractions.

SpringNext takes a different approach: generate everything as plain TypeScript code

No magic. No lock-in. Just code you own.

# 📚 Guides and documentation

- [🚀 Quick start with Prisma](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma)
- [🧙 Implementing your own methods in server modules](https://github.com/alevnyacow/springnext/wiki/Implementing-your-own-methods)
- [📈 Data flow schemas](https://github.com/alevnyacow/springnext/wiki/Data-flow-schemas)
- [⚙️ CLI commands glossary](https://github.com/alevnyacow/springnext/wiki/CLI-commands-glossary)
- [❓ FAQ](https://github.com/alevnyacow/springnext/wiki/FAQ)

# ❓ Why not use Nest or tRPC instead?

SpringNext takes inspiration from both, but focuses on a contract-first, scaffold-driven approach inside plain Next.js.

| Feature                | SpringNext                          | tRPC                    | Nest                        |
|------------------------|-------------------------------------|--------------------------|----------------------------|
| Architecture           | Contract-first (schema-driven)      | Procedure-based          | Module-based               |
| Learning curve         | Medium                              | Low                      | High                       |
| Type safety            | End-to-end + runtime validation     | End-to-end               | Partial                    |
| Scaffolding            | Full-stack (API + backend + hooks)  | None                     | Partial (CLI generators)   |
| Boilerplate            | Low (generated code)                | Low                      | Medium                     |
| Framework lock-in      | None                                | None                     | Moderate                   |
| Single source of truth | Yes (schemas)                       | Partial                  | Partial                    |
| Code ownership         | Full (generated, editable)          | Full                     | Partial (framework-driven) |

# 🚫 When not to use

- very small projects (may not be worth it)
- non-Next.js stacks
- you prefer runtime-driven frameworks like NestJS

# 🪄 Live examples on StackBlitz 

- [User management application (CRUD-based)](https://stackblitz.com/edit/springnext-example-user-management)