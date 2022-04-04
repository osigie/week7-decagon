import fs from 'fs/promises';
import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { customAlphabet } from 'nanoid/async';
import { StatusCodes } from 'http-status-codes';

export const transactionsPath = path.join(
  __dirname,
  '..',
  '..',
  'dataBase/transactions.json',
);
export const balancesPath = path.join(
  __dirname,
  '..',
  '..',
  'dataBase/balances.json',
);

export async function create1() {
  const transactionsDb = await fs.readFile(transactionsPath, 'utf8');
  return JSON.parse(transactionsDb);
}
export async function create2() {
  const balanceDb = await fs.readFile(balancesPath, 'utf8');
  return JSON.parse(balanceDb);
}

// export const transferError = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   create2().then((data) => {
//     if (req.body && data.length === 0) {
//       return res
//         .status(StatusCodes.BAD_REQUEST)
//         .json({ message: 'Account number not found' });
//     }
//   });

//   next();
// };
export const nanoid = customAlphabet('1234567890', 10);
