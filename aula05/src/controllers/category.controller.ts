import { NextFunction, Request, Response } from 'express';
import { CategorySerice } from '../services/category.service';
import { HttpCreated } from '../helpers/http';

export function createCategory(service: CategorySerice) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { name } = req.body;

        return service
            .create(name)
            .then((category) => HttpCreated(res, category))
            .catch((err) => next(err));
    };
}
