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

// //middleware to check if there is user

export const nanoid = customAlphabet('1234567890', 10);
