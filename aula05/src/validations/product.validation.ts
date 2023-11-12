import { z } from 'zod';

const productName = z.string({
    required_error: 'product name is required',
    invalid_type_error: 'product name must be a string',
});
