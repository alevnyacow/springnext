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

SpringNext is a CLI that generates a full backend architecture inside Next.js (controllers, services, API) and React query hooks in seconds, providing *zero-config* infrastructure like DI, unified errors, API controllers, and in-memory or Prisma stores, and a set of helper utilities to streamline development.

It is **not** a framework — Next.js already has routing and a powerful runtime. SpringNext is a tool to supercharge Next.js, giving you fast full-stack scaffolding while staying fully within its ecosystem.

## Who is it for?

- Enterprise backend developers (.NET, Spring) moving to Next.js.
- Startups that need both speed and scalability.
- Teams tired of inconsistent architecture and code-style debates.  
- Developers who want structure without heavy frameworks that feel like another language.

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
📁 Generated structure with ready-to-use scaffolded files:

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

- `/domain/entities/user/user.entity.ts` → entity schema (static field `schema` in `User` class)
- `/server/stores/user/user.store.ts` → store schemas (if default schemas do not fit your needs)
- `/server/stores/user/user.store.prisma.ts` → map `UserStore` contracts to Prisma client contracts (implement existing functions in `mappers` object)

→ Full backend + API + frontend hooks — ready in seconds

## Does it only work for CRUD?

No. You can scaffold modules independently and implement your own logic. All details can be found in `Guides` section.

# 🧪 Live playground

https://stackblitz.com/edit/springnext-playground

Everything is preconfigured — jump in and start exploring, testing, and tinkering with SpringNext in a ready-to-use environment.

*Best experienced in Chrome. StackBlitz support in Safari may vary.*


# 🔮 Core principles

### Plug-and-play by default, fully tweakable when you need it. 

Use it out of the box without thinking about the internals — or customize anything with complete control. Every line of code is yours.

### Best practices through convenience.

We read code more than we write it — so quality matters. But best practices aren’t enforced by linters or style guides. SpringNext flips the approach: it makes enterprise-grade code the easiest option — so anything else feels wrong.

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