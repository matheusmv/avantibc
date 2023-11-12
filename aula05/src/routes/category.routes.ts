import { Router } from 'express';

import prismaClient from '../db';

import { CategorySericeImpl } from '../services/category.service';

import { createCategory } from '../controllers/category.controller';

export function createCategoryRoutes(router: Router) {
    const categoryService = new CategorySericeImpl(prismaClient);

    router.post('/categories', createCategory(categoryService));
}
