import { PrismaClient, Product } from '@prisma/client';
import { Errors } from '../helpers/errors';

export interface ProductService {
    create(name: string, bar_code: string, price: number): Promise<Product>;
    findAll(): Promise<Array<Product>>;
    findById(id: string): Promise<Product>;
    update(id: string, details: Product): Promise<Product>;
    delete(id: string): Promise<Product>;
}

export class ProductServiceImpl implements ProductService {
    constructor(private readonly prisma: PrismaClient) {}

    async create(
        name: string,
        bar_code: string,
        price: number,
    ): Promise<Product> {
        // TODO: should perform validation on name, bar_code, price fields

        return this.prisma.product.create({
            data: {
                name,
                bar_code,
                price,
            },
        });
    }

    async findAll(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }

    async findById(id: string): Promise<Product> {
        const product = await this.prisma.product.findFirst({
            where: {
                id,
            },
            include: {
                ProductCategory: {
                    include: {
                        category: true,
                    },
                },
            },
        });

        if (!product) {
            throw Errors.notFound(`product with id ${id} does not exists`);
        }

        return product;
    }

    async update(id: string, details: Product): Promise<Product> {
        // TODO: should perform validation on details field

        const product = await this.prisma.product.findUnique({
            where: {
                id,
            },
        });

        if (!product) {
            throw Errors.notFound(`product with id ${id} does not exists`);
        }

        return this.prisma.product.update({
            where: {
                id,
            },
            data: details,
        });
    }

    async delete(id: string): Promise<Product> {
        const product = await this.prisma.product.findUnique({
            where: {
                id,
            },
        });

        if (!product) {
            throw Errors.notFound(`product with id ${id} does not exists`);
        }

        return this.prisma.product.delete({
            where: {
                id,
            },
        });
    }
}
