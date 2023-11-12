import { Router } from 'express';

import { createProductRoutes } from './product.routes';
import { createProductWithCategoryRoutes } from './product-category.routes';
import { createCategoryRoutes } from './category.routes';

export function buildRoutes() {
    const routes = Router();

    createProductRoutes(routes);
    createProductWithCategoryRoutes(routes);
    createCategoryRoutes(routes);

    return routes;
}
