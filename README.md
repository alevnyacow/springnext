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

# 🧠 What is SpringNext?

SpringNext is a CLI code generator + conventions layer for Next.js with a ton of useful zero-config infrastructure like DI, unified errors, handy API controllers, in-memory and Prisma stores. 

It does **NOT**:
- introduce a runtime framework
- replace Next.js routing
- requires learning a lot of new complex abstractions.

# 🧪 Live playground

https://stackblitz.com/edit/springnext-playground

Everything is ready for your experiments there. Have fun!

*Best experienced in Chrome. StackBlitz support in Safari may vary.*

# 🔮 Motivation

Imagine building a backend by hand:

- Writing API routes for every entity  
- Manually wiring services and controllers  
- Creating typed React Query hooks from scratch  
- Managing in-memory or database stores  

This can take **hours or even days** for multiple entities. So, if we don’t want to write all of this manually, we have two options: either trust an LLM to write the code, or rely on some framework to control execution — thereby increasing complexity and the number of abstractions.

And this is where SpringNext comes in — to give you fast delivery while keeping full control over your code and its maintainability. And most importantly, *to preserve the joy of programming!* With SpringNext scaffolder, you get all backend modules and React Query hooks **in seconds** and with just a few CLI commands. Plus, you get:

- ⚡ **Clean separation of services, controllers, and data layer** — no more dumping logic into `/app/api`  
- 🔒 **End-to-end type safety** — automatically typed API responses and React Query hooks  
- 🚀 **One-command full-stack scaffolding** — backend, API routes, and React Query hooks, fully editable, zero boilerplate  
- 🔧 **Built-in dependency injection** — ready to use, no setup required  
- 🗄️ **Ready-to-use in-memory & Prisma stores** — scaffolded CRUD works immediately  

💡 **Result:** you own every line of code, eliminate boilerplate, and focus on your business logic.

Wire a backend in seconds, not hours — all fully typed and editable. **No runtime magic. No lock-in. Just code.**

# ⏱️ Quick Overview

## Scaffolding full working CRUD with React Queries

### 1. Install and set up SpringNext

[Quick start with Prisma guide.](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma#setup)

### 2. Scaffold full CRUD for `User` entity

Run `npx sn crud-api user`
  
This will instantly scaffold:

- /domain/`entities`/user/...
- /server/`stores`/user/...  (contract, in-memory, prisma)
- /server/`services`/user/...
- /server/`controllers`/user/...
- `/app/api`/user/...
- /ui/shared/`queries`/user/...

### 3. Describe your entity and stores

It only requires a few file tweaks:

- `/domain/entities/user/user.entity.ts` → entity schema
- `/server/stores/user/user.store.ts` → store schemas (if default schemas do not fit your needs)
- `/server/stores/user/user.store.prisma.ts` → map `UserStore` contracts to Prisma client contracts

→ Backend + API + React Query hooks ready!

## Using scaffolded queries

Scaffolded query hooks come in handy namespaces and fully-typed, end-to-end.

```tsx
import { UserQueries } from '@/ui/shared/queries/user';

const { data } = UserQueries.useGET({ id: 'user-1' })
```

## Using scaffolded modules in Server Actions

SpringNext comes with zero-config DI, working out of the box. Use `fromDI` method, enjoying IDE autocompletion.

```tsx
'use server'

import { fromDI } from '@/server/di'
import type { UserService } from '@/server/services/user'

/**
 * FYI: `fromDI` string argument is strongly typed and
 * this type automatically updates after you scaffold
 * anything. Cool, right?
 */ 
const userService = fromDI<UserService>('UserService')

const user1 = await userService.getDetails({ 
    filter: { id: 'user-1-id' } 
})
```

## Need more control?

[Scaffold modules independently](https://github.com/alevnyacow/springnext/wiki/CLI-commands-glossary#example), and feel free to implement your own logic — supercharged with runtime type checks and React Query hooks generated in a single CLI command!

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