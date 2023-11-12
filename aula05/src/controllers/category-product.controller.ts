import { NextFunction, Request, Response } from 'express';
import { ProductCategoryService } from '../services/product-category.service';
import { HttpCreated } from '../helpers/http';

export function addCategoryToProduct(service: ProductCategoryService) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { id_product, id_category } = req.body;

        return service
            .add(id_product, id_category)
            .then((productCategory) => HttpCreated(res, productCategory))
            .catch((err) => next(err));
    };
}

export function createProductWithCategory(service: ProductCategoryService) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { name, bar_code, price, id_category } = req.body;

        return service
            .createProductWithCategory(name, bar_code, price, id_category)
            .then((product) => HttpCreated(res, product))
            .catch((err) => next(err));
    };
}
