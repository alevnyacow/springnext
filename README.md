<p align="center">
    <img src='https://raw.githubusercontent.com/alevnyacow/springnext/refs/heads/main/logo.svg?sanitize=true'></img>
</p>

<p align="center">
    Next.js with Spring-level robustness and powerful scaffolding — no Java involved.
</p>

<p align="center">
    Works inside plain Next.js — no framework lock-in.
</p>

<p align="center">
  <a href="https://badge.fury.io/js/springnext" target="_blank"><img src='https://badge.fury.io/js/springnext.svg'></img></a>
  <img src='https://img.shields.io/npm/l/springnext'></img>
</p>

# ✨ At a glance

- Full-stack scaffolding in one command — you own every line of code (shadcn-style)
- Structured, domain-driven architecture out of the box
- Built-in dependency injection powered by Inversify
- In-memory + Prisma stores
- Type-safe backend + React Query hooks
- Contract-first with Zod
- Works inside plain Next.js (no framework lock-in)

# 🧪 Live playground

https://stackblitz.com/edit/springnext-playground

*Best experienced in Chrome (Safari can be flaky).*

# ⏱️ Quick Overview

Scaffold a fully-typed backend + React Query layer for Next.js in one command.

- Install and set up SpringNext
- Run `npx sn crud-api user`
- Tweak a few files

→ Backend + API + React Query hooks ready

```tsx
// fully typed, end-to-end
const { data } = UserQueries.useGET({ id: 'user-1' })
```

Using scaffolded hooks:

```tsx
'use client'

// scaffolded query hooks come in handy namespaces
import { UserQueries } from '@/ui/shared/queries/user';

export default function Page() {
  const { mutate } = UserQueries.usePOST()
  // ... 
}
```

Use the same services directly in Server Actions:

```tsx
'use server'

import { fromDI } from '@/server/di'
import type { UserService } from '@/server/services/user'

export default async function Page() {
    /**
     * FYI: `fromDI` string argument is strongly typed and
     * this type automatically updates after you scaffold
     * anything. Cool, right?
     */ 
    const userService = fromDI<UserService>('UserService')

    const user1 = await userService.getDetails({ 
        filter: { id: 'user-1-id' } 
    })

    /* ... */
}
```

Want to add your own methods in services, controllers, or stores? Go ahead! React Query hooks are automatically generated for all controller methods with just one CLI command:

```bash
#rq stands for "routes and queries"
npx sn rq
```

Need more control? Scaffold modules independently:

```bash
# Scaffold Product entity and ProductStore
npx sn se product
# Scaffold Order service with ProductStore injected
npx sn s order i:ProductStore
# Scaffold Shop controller with OrderService injected
npx sn c shop i:OrderService

# Implement the required code in the scaffolded modules

# Generate API routes and React Query hooks for all controllers
npx sn rq
```

# 🚀 Quick start with Prisma

Assuming you have:

- `Next.js` project with a generated `Prisma` client
- some `User` schema in your `Prisma` client
- enabled `experimentalDecorators` and `emitDecoratorMetadata` in `compilerOptions` section of `tsconfig.json`
- configured `@tanstack/react-query`

## Setup

```bash
# install SpringNext with peer dependencies
npm i inversify zod reflect-metadata springnext

# initialize SpringNext with absolute prisma client path
npx sn init prismaClientPath:@/generated/prisma/client
```

Then plug your `Prisma` adapter in scaffolded `/server/infrastructure/prisma/client.ts` file.

## Scaffolding CRUD operations for `User`

```bash
npx sn crud-api user
```

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

Then tweak a few files:

- `/domain/entities/user/user.entity.ts` → entity schema
- `/server/stores/user/user.store.ts` → store schemas (if default schemas do not fit your needs)
- `/server/stores/user/user.store.prisma.ts` → map `UserStore` contracts to Prisma client contracts

And after only one command and a few tweaks you have ready-to-use React Query hooks & Server Actions backend.

# 🧙 Implementing your own methods

## Zod schemas (module contracts)

Server method contracts are defined with Zod schemas in files like `user.controller.metadata.ts` or `product.service.metadata.ts`.

They:

- validate data at runtime
- can be reused across layers (no separate DTOs needed)
- automatically infer types (no manual TypeScript work)

Service method description example:

```ts
// ...some service metadata
orderDetails: {
  payload: Order.schema.pick({ 
    name: true, 
    createdDate: true 
  }),
  response: z.object({
    user: User.schema,
    products: z.array(
      Product.schema.omit({ 
        price: true 
      })
    )
  })
}
// ...some service metadata
```

## Services

1. **Define method in metadata** (`*.service.metadata.ts`):

```ts
// ...service metadata
foo: {
  request: z.object({ str: z.string() }),
  response: z.object({ num: z.number() })
}
// ...service metadata
```

2. **Implement it in service** (`*.service.ts`):

```ts
// ...service class implementation
foo = this.methods('foo', async ({ str }) => {
  // 'foo' string is strongly-typed, don't worry
  // all input and output types are also inferred
  return { num: Number(str) }
})
// ..service class implementation
```

### Usage

Service methods can be used like a usual method of signature `(data: Request) => Promise<Response>`. E.g.

```ts
const { num } = await someService.foo({ str: '25' })
```

## Controllers

Same idea, but metadata uses optional `query` and optional `body` instead of abstract `request`.

1. **Metadata** (`*.controller.metadata.ts`):

```ts
// ...controller metadata
POST: {
  query: z.object({ id: z.string() }),
  body: z.object({ delta: z.number() }),
  response: z.object({ success: z.boolean() })
}
// ...controller metadata
```

2. **Implementation** (`*.controller.ts`):

`query` and `body` are merged into one object in implementation:

```ts
// ...controller class implementation
POST = this.endpoints('POST', async ({ id, delta }) => {
  return { success: true }
})
// ..controller class implementation
```

### React-queries and API routes

Once you're done implementing controller methods, just run `npx sn rq`. This command will generate up-to-date API routes and React Query hooks for all your controllers. You can also run it in a pre-commit hook so that your backend and frontend integration is always kept in sync.

# ❓ FAQ

## Why not use Nest or tRPC?

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


## What does domain-focused mean?

SpringNext puts your business domain first. Entities drive the architecture, so backend and frontend stay consistent.

## What does contract-first mean?

All server modules are defined by Zod schemas. Function signatures and entity contracts are derived from them. There is also automatic runtime validation to ensure that all data — function arguments and entity models — conform to their schemas.

## Can I tweak scaffolded files?

Yes — everything is fully editable, including configuration. Think of SpringNext as a shadcn-style approach for full-stack: scaffold first, then fully own the code. Moreover, in most of the cases your changes are preserved on subsequent generations. For example, if you modify a generated query and run `npx sn rq` later, your edits stay intact.

## Do I really need to understand DI and other fancy concepts to use SpringNext effectively?

Not really. SpringNext handles dependency injection (DI) for you using `inversifyjs`. You don’t need to set it up manually.
To get an instance of a service anywhere in your server code, just use:

```tsx
import { fromDI } from '@/server/di'

const userService = fromDI<UserService>('UserService')
```

Here, `fromDI` is strongly typed — your IDE will give autocomplete automatically.

## Why data layer modules are called `Stores` and not `Repositories`?

A “Repository” is a specific design pattern for managing data. SpringNext prefers Stores — a simple, flexible abstraction for your data layer that can adapt to your needs regardless of the specific pattern. This approach helps to keep your code simple, and it has been successfully used in other languages, like Go.

## When not to use?

- Small apps without backend complexity
- If you prefer RPC-only style (tRPC fits better)
- If you don’t want layered architecture / DI

# 📚 Data flow schemas

## React query flow
```
┌─────────┐
│ Client  │  <-- React Components
└────┬────┘
     │ calls
     ▼
┌─────────────┐
│ React Query │  <-- hooks generated by SpringNext
└────┬────────┘
     │ fetch
     ▼
┌────────────┐
│ API Routes │  <-- Next.js API routes
└────┬───────┘
     │ invokes
     ▼
┌────────────┐
│ Controller │  <-- handles HTTP request, calls services
└────┬───────┘
     │ calls
     ▼
┌─────────┐
│ Service │  <-- business logic
└────┬────┘
     │ accesses
     ▼
┌────────┐
│ Store  │  <-- in-memory / Prisma / custom store
└────────┘
     │ reads/writes
     ▼
┌──────────┐
│ Database │
└──────────┘
```
## Server actions flow

```
┌───────────────┐
│ Server Action │  <-- 'use server' function in Next.js
└────┬──────────┘
     │ calls
     ▼
┌──────────┐
│ Service  │  <-- business logic
└────┬─────┘
     │ accesses
     ▼
┌────────┐
│ Store  │  <-- in-memory / Prisma / custom store
└────┬───┘
     │ reads/writes
     ▼
┌──────────┐
│ Database │
└──────────┘
```

# 👓 CLI commands glossary

## Initialization

| Command         | Scaffolding result | Options                                                                                                       |
| --------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `npx sn init` | **init**ialization | pass `prismaClientPath:` to work with Prisma. E.g. `npx sn init prismaClientPath:@/generated/prisma/client` |

## Complex scaffolding (multiple modules are scaffolded in one command)

| Command                        | Scaffolding result                                                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npx sn crud-api <name>`     | CRUD via Server Actions and React Query hooks.                                                                                                                       |
| `npx sn crud-service <name>` | CRUD via Server Actions (no Controllers, API Routes and React Query hooks).                                                                                          |
| `npx sn se <name>`           | **s**tored **e**ntity: entity + store (contracts linked).                                                                                                            |
| `npx sn rq`                  | API **r**outes and React **q**ueries for all of your controllers. This command will also remove endpoints which don't exist anymore with corresponding React query hooks |

## Primary server modules scaffolding

| Command              | Scaffolding result                                    | Options                                                                                                                                                                                                 |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npx sn e <name>`  | **e**ntity                                            |                                                                                                                                                                                                         |
| `npx sn vo <name>` | **v**alue **o**bject                                  |                                                                                                                                                                                                         |
| `npx sn cs <name>` | **c**ustom **s**tore (all schemas are `z.object({})`) |                                                                                                                                                                                                         |
| `npx sn s <name>`  | **s**ervice                                           | `i:UserStore,Logger` will automatically inject `UserStore` and `Logger`. E.g. `npx sn s shop i:UserStore,ProductStore` will create `ShopService` with already injected `UserStore` and `ProductStore` |
| `npx sn c <name>`  | **c**ontroller                                        | `i:UserService` will automatically inject `UserService`. `Logger` and `Guards` are injected by default regardless of `i:` option                                                                        |

## Auxiliary server modules scaffolding

| Command             | Scaffolding result        |
| ------------------- | ------------------------- |
| `npx sn p <name>` | **p**rovider              |
| `npx sn i <name>` | **i**nfrastructure module |

## UI modules scaffolding

| Command             | Scaffolding result        |
| ------------------- | ------------------------- |
| `npx sn w <name>` | **w**idget                |
| `npx sn lw <name>` | **l**ayouted **w**idget - widget with separated view layout |
