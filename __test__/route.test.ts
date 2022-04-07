import request from 'supertest';
import app from '../src/app';

const sampleData = {
  balance: 500,
};

describe('POST /create-account', () => {
  test('test for account creation', async () => {
    const res = await request(app).post('/create-account').send(sampleData);
    expect(res.statusCode).toBe(201);
    expect(res.body.balance).toEqual(500);
  });
});

describe('POST / transfer', () => {
  const sampleData = {
    from: '3680412622',
    to: '1674366138',
    amount: 400,
  };
  test('test for transfer if account is not available', async () => {
    const res = await request(app).post('/transfer').send(sampleData);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ msg: 'Account number not found' });
  });
});

describe('GET /balance/:accountNumber', () => {
  test('respond with the right data', async () => {
    const res = await request(app).get('/balance');
    expect(res.statusCode).toEqual(200);
  });
});
