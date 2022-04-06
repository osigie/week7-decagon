import request from 'supertest';
import app from '../app';

import { deleteFile1, deleteFile2 } from './helper';
beforeEach(async () => {
  deleteFile1();
});

beforeEach(async () => {
  deleteFile2();
});


let sample = {
  acccount: '3342687188',
  balance: 6444,
  createdAt: '4/4/2022, 9:42:09 PM',
};

describe('GET API TESTS', () => {
  test('gets no data if database.json file does not exist', async () => {
    const res = await request(app).get('/balance');
    expect(res.statusCode).toBe(202);
    expect(res.body).toEqual([]);
  });
});

// describe('GET /balance/:accountNumber', () => {
//   // it('responds with the right json for a single account', async function () {
//   //   const req = await request(app).post('/create-account').send(sample);
//   //   const res = await request(app)
//   //     .get('/balance/' + req.body[0].account)
//   //     .set('Accept', 'application/json');
//   //   expect(res.headers['Content-Type']).toMatch(/json/);
//   //   expect(res.status).toEqual(201);
//   //   expect(res.body.balance).toBe(req.body[0].balance);
//   // }),
//   it('respond with the whole balance database', async () => {
//     const response = await request(app).post('/create-account').send(sample);
//     const res = await request(app).get('/balance');
//     expect(response.status).toEqual(201);
//     expect(response.body.balance).toMatchObject([sample]);
//   });
// });

// describe('POST /create-account', () => {
//   const sampleData = {
//     balance: 500,
//   };
//   test('test for account creation', async () => {
//     const res = await request(app).post('/create-account').send(sampleData);
//     expect(res.statusCode).toBe(201);
//     expect(res.body.balance).toEqual({ balance: 500 });
//   });
// });

// describe('POST / transfer', () => {
//   const sampleData = {
//     from: '3680412622',
//     to: '1674366138',
//     amount: 400,
//   };
//   test('test for transfer if account is not available', async () => {
//     const res = await request(app).post('/transfer').send(sampleData);
//     expect(res.statusCode).toBe(201);
//     expect(res.body.balance).toEqual({ msg: 'Account number not found' });
//   });
// });
