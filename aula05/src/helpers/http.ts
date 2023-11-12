import { Response } from 'express';

export function HttpOk<T>(res: Response, body?: T) {
    return res.status(200).json(body);
}

export function HttpCreated<T>(res: Response, body?: T) {
    return res.status(201).json(body);
}

export function HttpNoContent<T>(res: Response, body?: T) {
    return res.status(204).json(body);
}

export function HttpBadRequest<T>(res: Response, body?: T) {
    return res.status(400).json(body);
}

export function HttpUnauthorized<T>(res: Response, body?: T) {
    return res.status(401).json(body);
}

export function HttpForbidden<T>(res: Response, body?: T) {
    return res.status(403).json(body);
}

export function HttpInternalError<T>(res: Response, body?: T) {
    return res.status(500).json(body);
}

export function HttpNotImplemented<T>(res: Response, body?: T) {
    return res.status(501).json(body);
}

export function HttpServiceUnavailable<T>(res: Response, body?: T) {
    return res.status(503).json(body);
}
