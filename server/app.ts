import express from 'express';
import cors from 'cors';
import contactRoutes from './src/routes/contact.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

export default app;
