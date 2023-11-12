import { NextFunction, Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { HttpCreated, HttpOk } from '../helpers/http';

export function createProduct(service: ProductService) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { name, bar_code, price } = req.body;

        return service
            .create(name, bar_code, price)
            .then((product) => HttpCreated(res, product))
            .catch((err) => next(err));
    };
}

export function findAllProducts(service: ProductService) {
    return async (req: Request, res: Response, next: NextFunction) => {
        return service
            .findAll()
            .then((products) => HttpOk(res, products))
            .catch((err) => next(err));
    };
}

export function findProductById(service: ProductService) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        return service
            .findById(id)
            .then((product) => HttpOk(res, product))
            .catch((err) => next(err));
    };
}

export function updateProduct(service: ProductService) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        return service
            .update(id, req.body)
            .then((updatedProduct) => HttpOk(res, updatedProduct))
            .catch((err) => next(err));
    };
}

export function deleteProduct(service: ProductService) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        return service
            .delete(id)
            .then(() => HttpOk(res))
            .catch((err) => next(err));
    };
}
