import { z } from 'zod';

const categoryName = z.string({
    required_error: 'category name is required',
    invalid_type_error: 'category name must be a string',
});
