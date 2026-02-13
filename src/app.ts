import express, { Express, Request, Response } from 'express';

const app: Express = express();

// Variables d'environnement
const PORT = process.env.PORT || 3000;
const API_VERSION = process.env.API_VERSION || '1.0.0';

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: "Bienvenue sur l'API",
    version: API_VERSION,
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get('/products', (req: Request, res: Response) => {
  const products = [
    {
      id: 1,
      name: 'Produit 1',
      price: 99.99,
      description: 'Description du produit 1',
    },
    {
      id: 2,
      name: 'Produit 2',
      price: 149.99,
      description: 'Description du produit 2',
    },
    {
      id: 3,
      name: 'Produit 3',
      price: 199.99,
      description: 'Description du produit 3',
    },
  ];

  res.json({
    success: true,
    data: products,
    count: products.length,
  });
});

app.get('/api/version', (req: Request, res: Response) => {
  res.json({
    version: API_VERSION,
    node: process.version,
    environment: process.env.NODE_ENV,
  });
});

// Route 404
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route non trouvée',
    path: req.path,
  });
});

export { app, PORT, API_VERSION };
