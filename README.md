<p align="center">
    <img src='https://raw.githubusercontent.com/alevnyacow/springnext/refs/heads/main/logo.svg?sanitize=true'></img>
</p>

<p align="center">
    Next.js with Spring-level robustness and powerful scaffolding — <i>no Java involved</i>.
</p>
<p align="center">
    <b>Works inside plain Next.js — no framework lock-in.</b>
</p>

<p align="center">
  <a href="https://badge.fury.io/js/springnext" target="_blank"><img src='https://badge.fury.io/js/springnext.svg'></img></a>
  <img src='https://img.shields.io/npm/l/springnext'></img>
</p>

# 🌱 About

SpringNext enforces contract-first architecture and generates everything in seconds. Not a framework — enterprise patterns from .NET and Spring world, made instant via CLI and built-in tools.

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

📁 Generated structure with ready-to-use scaffolded files:

```bash
# Entity
domain/entities/user/
# Controllers
server/controllers/user/
# Services
server/services/user/
# Stores (contract, in-memory, Prisma)
server/stores/user/
# API Routes
app/api/user-controller/
# React Query hooks
ui/shared/queries/user/
```

Describe your entity and stores in scaffolded files:

- `/domain/entities/user/user.entity.ts` → entity schema (static field `schema` in `User` class)
- `/server/stores/user/user.store.ts` → store schemas (if default schemas do not fit your needs)
- `/server/stores/user/user.store.prisma.ts` → map `UserStore` contracts to Prisma client contracts (implement existing functions in `mappers` object)

→ Full backend + API + frontend hooks — ready in seconds.

## Does it only work for CRUD?

No. You can scaffold modules independently and implement your own logic — React Query hooks will be generated as well. All details can be found in `Guides` section.

## Is invalidation in queries already configured?

Yes. You can also customize queries as needed, and your changes will be preserved when code is regenerated.

## What about Server Actions?

SpringNext modules can be seamlessly used in Server Actions.

Use the scaffolded `fromDI` helper to access your services directly and just call their methods.

## What are these metadata files?

SpringNext provides a contract-first approach. Metadata stores the module name (used for errors) and the schemas of its methods, which are used for runtime validation of requests and responses, as well as for enforcing method contracts during their implementation.

# 🧪 Live playground

https://stackblitz.com/edit/springnext-playground

Everything is preconfigured — jump in and start exploring, testing, and tinkering with SpringNext in a ready-to-use environment.

*Best experienced in Chrome. StackBlitz support in Safari may vary.*

# 🔮 Core principles

### Plug-and-play by default, fully tweakable when you need it. 

Use it out of the box without thinking about the internals — or customize anything with complete control. Every line of code is yours.

### Best practices through convenience.

We read code more than we write it — so quality matters. But best practices aren’t enforced by linters or style guides. SpringNext flips the approach: it makes enterprise-grade code the easiest option — so anything else feels wrong.

### A combination of the rigor of .NET and Spring with the flexibility of TypeScript.

Sometimes Java or C# can feel clunky and verbose compared to TypeScript. At the same time, Next projects often turn into unmaintainable chaos compared to .NET or Spring. SpringNext brings together the best of both worlds — the flexibility of TypeScript within an enterprise-ready architecture.

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
| Architecture           | Contract-first (schema-driven), .NET/Spring inspired      | Procedure-based          | Module-based               |
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