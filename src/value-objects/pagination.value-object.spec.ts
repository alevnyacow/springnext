import { expect, test } from '@rstest/core'
import { Pagination } from './pagination.value-object'

test('Pagination can be created', () => {
    const page = Pagination.create({ pageSize: 10, zeroBasedIndex: 0 })
    const { model } = page
    expect(model.pageSize).toBe(10)
    expect(model.zeroBasedIndex).toBe(0)
})

test('Previous page', () => {
    const page = Pagination.create({ pageSize: 10, zeroBasedIndex: 1 })
    const { previousPage } = page
    expect(previousPage.model.pageSize).toBe(10)
    expect(previousPage.model.zeroBasedIndex).toBe(0)
})

test('Next page', () => {
    const page = Pagination.create({ pageSize: 10, zeroBasedIndex: 1 })
    const { nextPage } = page
    expect(nextPage.model.pageSize).toBe(10)
    expect(nextPage.model.zeroBasedIndex).toBe(2)
})