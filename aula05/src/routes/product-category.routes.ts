import { Router } from 'express';

import prismaClient from '../db';

import { ProductCategoryServiceImpl } from '../services/product-category.service';

import {
    addCategoryToProduct,
    createProductWithCategory,
} from '../controllers/category-product.controller';

export function createProductWithCategoryRoutes(router: Router) {
    const productCategoryService = new ProductCategoryServiceImpl(prismaClient);

    router.post(
        '/product/category/add',
        addCategoryToProduct(productCategoryService),
    );
    router.post(
        '/product/category/new',
        createProductWithCategory(productCategoryService),
    );
}
