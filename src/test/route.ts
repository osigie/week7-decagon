// import request from 'supertest';
// import app from '../app';
// import fs from 'fs/promises';
// const dbPath = env.require('DATABASE_PATH');
// import env from '../src/env';
// beforeAll(async () => {
//   await fs.writeFile(dbPath, JSON.stringify([mockData]));
// });

// afterAll(async () => {
//   await fs.unlink(dbPath);
// });

// let sample = {
//   id: '3342687188',
//   balance: 6444,
//   createdAt: '4/4/2022, 9:42:09 PM',
// };

// describe('GET /balance/:accountNumber', function () {
//   it('responds with the right json for a single account', async function () {
//     const response = await request(app)
//       .get('/balance/3342687188')
//       .set('Accept', 'application/json');
//     expect(response.headers['Content-Type']).toMatch(/json/);
//     expect(response.status).toEqual(200);
//     expect(response.body.balance).toMatchObject(sample);
//   }),
//     it('respond with the whole balance database', async () => {
//       const response = await request(app)
//         .get('/balance')
//         .set('Accept', 'application/json');
//       expect(response.headers['Content-Type']).toMatch(/json/);
//       expect(response.status).toEqual(200);
//       expect(response.body.balance).toMatchObject([sample]);
//     });
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
