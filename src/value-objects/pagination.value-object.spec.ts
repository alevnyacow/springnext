import { expect, test } from '@rstest/core'
import { Pagination } from './pagination.value-object'

test('Pagination can be created', () => {
    const page = Pagination.create({ pageSize: 10, zeroBasedIndex: 0 })
    const { model } = page
    expect(model.pageSize).toBe(10)
    expect(model.zeroBasedIndex).toBe(0)
})