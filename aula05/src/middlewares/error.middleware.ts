import { NextFunction, Request, Response } from 'express';
import { Errors, StandardError } from '../helpers/errors';
import { HttpInternalError } from '../helpers/http';

export function globalErrorHandler() {
    return async (
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        if (error instanceof StandardError) {
            error.path = req.path;
            return res.status(error.status).json(error);
        }

        console.error(error);

        return HttpInternalError(res, Errors.internal('Unexpected error'));
    };
}
