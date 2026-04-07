import { expect, test } from '@rstest/core';
import z from 'zod';

import { endpoints } from './controller'
import { NextRequest } from 'next/server';

const testControllerEndpoints = endpoints({
    name: 'TestController',
    schemas: {
        GET: { 
            query: z.object({ id: z.string() }),
            response: z.object({ idFromQuery: z.string() })
        },
        POST: {
            body: z.object({ bodyParam: z.string() }),
            query: z.object({ queryParam: z.string() }),
            response: z.object({ paramsJoinedWithSpace: z.string() })
        }
    }
})

const GET = testControllerEndpoints('GET', async ({ id }) => {
    return { idFromQuery: id }
})

test('GET test', async () => {
    const data = await GET(new NextRequest('http://localhost.mock.url:3000?id=hello'))
    const responseBody = await data.json() as { idFromQuery: string }
    expect(responseBody.idFromQuery).toBe('hello')
})

const POST = testControllerEndpoints('POST', async ({ bodyParam, queryParam }) => ({ 
    paramsJoinedWithSpace: `${bodyParam} ${queryParam}` }
))

test('POST test', async () => {
    const data = await POST(new NextRequest('http://localhost.mock.url:3000?queryParam=query', {
        body: JSON.stringify({ bodyParam: 'body' }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
    }))
    const responseBody = await data.json() as { paramsJoinedWithSpace: string }
    expect(responseBody.paramsJoinedWithSpace).toBe('body query')
})