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


Scaffold a fully-typed structured backend, API routes, and React Query hooks for Next.js in one CLI command.

# 🔮 Motivation

Imagine building a backend by hand:

- Writing API routes for every entity  
- Manually wiring services and controllers  
- Creating typed React Query hooks from scratch  
- Managing in-memory or database stores  

This can take hours or even days for multiple entities. With **SpringNext**, you get all of this literally in seconds:

- **Clean separation of services, controllers, and data layer** — no more dumping logic into /app/api  
- **End-to-end type safety** — automatically typed API responses and React Query hooks  
- **One-command full-stack scaffolding** — backend, API routes, React Query hooks, fully editable, no boilerplate
- **Built-in dependency injection** — ready to use, no setup required  
- **Ready-to-use in-memory and Prisma stores** — scaffolded CRUD works immediately  

💡 Result: you own every line of code, keep full control, and ship faster than ever.

**No runtime magic. No lock-in. Just code.**

# 🧪 Live playground

https://stackblitz.com/edit/springnext-playground

Everything is ready for your experiments there. Have fun!

*Best experienced in Chrome. StackBlitz support in Safari may vary.*

# ⏱️ Quick Overview

- [Install and set up SpringNext](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma#setup)
- Run `npx sn crud-api user`
  
This will instantly scaffold:

```bash
domain/entities/user # user entity

server/
  stores/user/... # user stores (contract, in-memory, prisma)
  services/user/... # service
  controllers/user/... # API controller

app/api/user/... # api routes

ui/shared/queries/user/... # react queries
```

- [Tweak a few files](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma#describing-entity-and-stores)


→ Backend + API + React Query hooks ready!

Using React query hooks:

```tsx
// scaffolded query hooks come in handy namespaces
import { UserQueries } from '@/ui/shared/queries/user';

// ... some component or hook ...

// fully typed, end-to-end
const { data } = UserQueries.useGET({ id: 'user-1' })
```

Scaffolded services can be directly used in Server Actions:

```tsx
'use server'

import { fromDI } from '@/server/di'
import type { UserService } from '@/server/services/user'

// ... some server action ...

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

Need more control? [Scaffold modules independently](https://github.com/alevnyacow/springnext/wiki/CLI-commands-glossary#example).

# ❓ Why not use Nest or tRPC instead?

SpringNext takes inspiration from both, but focuses on a contract-first, scaffold-driven approach inside plain Next.js.

| Feature                | SpringNext                                    | tRPC   | Nest                            |
| ---------------------- | --------------------------------------------- | ------ | ------------------------------- |
| Architecture           | domain-focused, contract-first                | ❌      | module-centric, tightly coupled |
| Learning curve         | Medium                                        | Low    | High                            |
| Type safety            | ✅  - including run-time checks out of the box | ✅      | ⚠️                               |
| Scaffolding            | ✅  - production-ready full-stack              | ❌      | ⚠️                               |
| Boilerplate            | ✅ - Low                                       | ✅      | ⚠️                        |
| No framework lock-in   | ✅                                             | ✅      | ❌                               |
| Single source of truth | ✅ (schemas)                                   | ⚠️      | ⚠️                               |
| Code ownership         | ✅ full (generated, editable)                  | ✅      | ⚠️ (framework patterns)          |



# 📚 Guides and documentation

- [🚀 Quick start with Prisma](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma)
- [🧙 Implementing your own methods in server modules](https://github.com/alevnyacow/springnext/wiki/Implementing-your-own-methods)
- [📈 Data flow schemas](https://github.com/alevnyacow/springnext/wiki/Data-flow-schemas)
- [⚙️ CLI commands glossary](https://github.com/alevnyacow/springnext/wiki/CLI-commands-glossary)
- [❓ FAQ](https://github.com/alevnyacow/springnext/wiki/FAQ)

# 🪄 Live examples on StackBlitz 

- [User management application (CRUD-based)](https://stackblitz.com/edit/springnext-example-user-management)