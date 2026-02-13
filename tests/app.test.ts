import request from 'supertest';
import { app } from '../src/app';

describe('API Tests', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('version');
      expect(response.body.message).toBe("Bienvenue sur l'API");
    });
  });

  describe('GET /health', () => {
    it('should return health status OK', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status');
      expect(response.body.status).toBe('OK');
    });
  });

  describe('GET /products', () => {
    it('should return products list', async () => {
      const response = await request(app).get('/products');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success');
      expect(response.body.success).toBe(true);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data.length).toBe(3);
    });

    it('should have correct product properties', async () => {
      const response = await request(app).get('/products');
      const firstProduct = response.body.data[0];
      expect(firstProduct).toHaveProperty('id');
      expect(firstProduct).toHaveProperty('name');
      expect(firstProduct).toHaveProperty('price');
      expect(firstProduct).toHaveProperty('description');
    });
  });

  describe('GET /api/version', () => {
    it('should return API version information', async () => {
      const response = await request(app).get('/api/version');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('version');
      expect(response.body).toHaveProperty('node');
      expect(response.body).toHaveProperty('environment');
    });
  });

  describe('404 Route', () => {
    it('should return 404 for unknown routes', async () => {
      const response = await request(app).get('/unknown-route');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Route non trouvée');
    });
  });
});
