import express from 'express';
import cors from 'cors';

import { buildRoutes } from './routes';
import { globalErrorHandler } from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(buildRoutes());
app.use(globalErrorHandler());

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`app listenting on: http://localhost:${port}`);
});
