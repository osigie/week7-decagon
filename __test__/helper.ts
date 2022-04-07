import { promises as fs } from 'fs';
import {balancesPath, transactionsPath} from "../src/utils"

export const deleteFile1 = async () => {
  try {
    await fs.unlink(transactionsPath);
  } catch (err) {}
};

export const deleteFile2 = async () => {
  try {
    await fs.unlink(balancesPath);
  } catch (err) {}
};
