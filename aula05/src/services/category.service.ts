import { Category, PrismaClient } from '@prisma/client';

export interface CategorySerice {
    create(name: string): Promise<Category>;
}

export class CategorySericeImpl implements CategorySerice {
    constructor(private readonly prisma: PrismaClient) {}

    async create(name: string): Promise<Category> {
        // TODO: should perform validation on name field

        return this.prisma.category.create({
            data: {
                name,
            },
        });
    }
}
