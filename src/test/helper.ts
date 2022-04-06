import { promises as fs } from 'fs';
// import { transactionsPath, balancesPath } from '../utils';
import path from 'path';

const transactionsPath = path.join(
  __dirname,
  '..',
  '..',
  'dataBase/testTransactions.json',
);
const balancePath = path.join(
  __dirname,
  '..',
  '..',
  'dataBase/testBalances.json',
);

export const deleteFile1 = async () => {
  try {
    await fs.unlink(transactionsPath);
  } catch (err) {}
};

export const deleteFile2 = async () => {
  try {
    await fs.unlink(balancePath);
  } catch (err) {}
};
