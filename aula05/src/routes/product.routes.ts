import { Router } from 'express';

import prismaClient from '../db';

import { ProductServiceImpl } from '../services/product.service';

import {
    createProduct,
    deleteProduct,
    findAllProducts,
    findProductById,
    updateProduct,
} from '../controllers/product.controller';

export function createProductRoutes(router: Router) {
    const productService = new ProductServiceImpl(prismaClient);

    router.post('/products', createProduct(productService));
    router.get('/products', findAllProducts(productService));
    router.get('/products/:id', findProductById(productService));
    router.put('/products/:id', updateProduct(productService));
    router.delete('/products/:id', deleteProduct(productService));
}
