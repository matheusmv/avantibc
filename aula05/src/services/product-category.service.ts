import { PrismaClient, ProductCategory } from '@prisma/client';

export interface ProductCategoryService {
    add(id_product: string, id_category: string): Promise<ProductCategory>;
    createProductWithCategory(
        name: string,
        bar_code: string,
        price: number,
        id_category: string,
    ): Promise<ProductCategory>;
}

export class ProductCategoryServiceImpl implements ProductCategoryService {
    constructor(private readonly prisma: PrismaClient) {}

    async add(
        id_product: string,
        id_category: string,
    ): Promise<ProductCategory> {
        return this.prisma.productCategory.create({
            data: {
                id_category,
                id_product,
            },
        });
    }

    async createProductWithCategory(
        name: string,
        bar_code: string,
        price: number,
        id_category: string,
    ): Promise<ProductCategory> {
        // TODO: should perform validation on name, bar_code, price fields

        return this.prisma.productCategory.create({
            data: {
                product: {
                    create: {
                        name,
                        bar_code,
                        price,
                    },
                },
                category: {
                    connect: {
                        id: id_category,
                    },
                },
            },
        });
    }
}
