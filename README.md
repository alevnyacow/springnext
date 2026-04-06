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

# 🔮 Motivation

Many Next.js developers face a trade-off:

- write everything by hand  
- generate piles of code with LLMs  
- or give up control to a framework  

And that’s before even thinking about architecture.

`SpringNext` strikes the balance — generate a structured, domain-first backend and React Query hooks in one command, while keeping full control over your code.

**No runtime magic. No lock-in. Just code.**

# 🧪 Live playground

https://stackblitz.com/edit/springnext-playground

Everything is ready for your experiments there. Have fun!

*Best experienced in Chrome, Safari StackBlitz operability may vary.*

# ✨ Features

- Structured, domain-focused architecture out of the box
- Full-stack scaffolding in one command — you own every line of code (shadcn-style)
- Built-in dependency injection powered by Inversify
- In-memory + Prisma stores
- Contract-first backend with Zod

# ⏱️ Quick Overview

- [Install and set up SpringNext](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma#setup)
- Run `npx sn crud-api user`
- [Tweak a few files](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma#describing-entity-and-stores)

→ Backend + API + React Query hooks ready

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

# 📚 Guides and documentation

- [🚀 Quick start with Prisma](https://github.com/alevnyacow/springnext/wiki/Quick-start-with-Prisma)
- [🧙 Implementing your own methods in server modules](https://github.com/alevnyacow/springnext/wiki/Implementing-your-own-methods)
- [📈 Data flow schemas](https://github.com/alevnyacow/springnext/wiki/Data-flow-schemas)
- [⚙️ CLI commands glossary](https://github.com/alevnyacow/springnext/wiki/CLI-commands-glossary)
- [❓ FAQ](https://github.com/alevnyacow/springnext/wiki/FAQ)

# 🪄 Live examples on StackBlitz 

- [User management application (CRUD-based)](https://stackblitz.com/edit/springnext-example-user-management)