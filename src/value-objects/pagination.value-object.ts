import z from 'zod';

export type PaginationModel = z.infer<typeof Pagination.schema>;

/**
 * Pagination value object. Used in store `list` method.
 */
export class Pagination {
    /**
     * Pagination schema.
     */
    static schema = z.object({
        /**
         * Zero based page index. Can't be negative.
         */
        zeroBasedIndex: z.coerce.number().int().nonnegative(),
        /**
         * Page size. Must be positive.
         */
        pageSize: z.coerce.number().int().positive()
    });

    private constructor(private readonly data: PaginationModel) {}

    /**
     * Domain logic-safe Pagination creating.
     */
    static create = (data: PaginationModel) => {
        const parsedModel = Pagination.schema.parse(data);
        return new Pagination(parsedModel);
    };

    /**
     * Pagination model.
     */
    get model(): PaginationModel {
        return this.data;
    }

    /**
     * Checks if two Pagination objects are same.
     */
    same = (pagination: Pagination) => {
        return (
            pagination.model.pageSize === this.model.pageSize &&
            pagination.model.zeroBasedIndex === this.model.zeroBasedIndex
        );
    };

    /**
     * Obtains next page.
     */
    get nextPage() {
        return Pagination.create({
            pageSize: this.data.pageSize,
            zeroBasedIndex: this.data.zeroBasedIndex + 1
        });
    }

    /**
     * Obtains previous page. Safe implementation - if it's first page, pagination with the same model is returned.
     */
    get previousPage() {
        if (this.model.zeroBasedIndex === 0) {
            return Pagination.create(this.model);
        }

        return Pagination.create({
            pageSize: this.model.pageSize,
            zeroBasedIndex: this.model.zeroBasedIndex - 1
        });
    }

    /**
     * Obtain previous page. Unsafe implementation.
     */
    get previousPage_UNSAFE() {
        return Pagination.create({
            pageSize: this.model.pageSize,
            zeroBasedIndex: this.model.zeroBasedIndex - 1
        });
    }
}
