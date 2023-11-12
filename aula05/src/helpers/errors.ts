export class StandardError extends Error {
    constructor(
        public timestamp: number,
        public status: number,
        public error: string,
        public message: string,
        public path?: string,
        public errorLog?: Array<Record<string, any>>,
    ) {
        super();
    }

    static of(
        status: number,
        error: string,
        message: string,
        path?: string,
        errorLog?: Array<Record<string, any>>,
    ): StandardError {
        return new StandardError(
            Date.now(),
            status,
            error,
            message,
            path,
            errorLog,
        );
    }
}

export class Errors {
    static notFound(message: string): StandardError {
        return StandardError.of(404, 'Object Not Found', message);
    }

    static validation(
        message: string,
        errorLog: Array<Record<string, any>>,
    ): StandardError {
        return StandardError.of(
            422,
            'Unprocessable Entity',
            message,
            undefined,
            errorLog,
        );
    }

    static internal(message: string): StandardError {
        return StandardError.of(500, 'Internal Server Error', message);
    }
}
