import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { NextFunction, Request, Response } from 'express';
import {
  nanoid,
  create2,
  balancesPath,
  create1,
  transactionsPath,
} from '../utils';
import { getStatusCode, StatusCodes } from 'http-status-codes';
import { Balance } from '../interface';

//Create account
const createAccount = async (req: Request, res: Response) => {
  try {
    const accN = await nanoid();
    let dB = await create2();
    const userInput = req.body;
    const updatedBody = Object.assign(
      { account: 0 },
      { balance: userInput.balance },
      { account: accN },
      { createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }) },
    );
    dB.push(updatedBody);
    fs.writeFile(balancesPath, JSON.stringify(dB, null, 3), (err) => {
      res.status(StatusCodes.CREATED).json(updatedBody);
    });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'please input right details' });
  }
};
//Get account
const getAccount = async (req: Request, res: Response) => {
  try {
    let dB = await create2();
    const idFromUser = req.params.account;
    const finder = dB.find((each: Balance) => each.account === idFromUser);
    res.status(StatusCodes.ACCEPTED).json(finder);
  } catch (error) {}
};

//Get all account
const getAllAccount = async (req: Request, res: Response) => {
  try {
    let dB = await create2();
    res.status(StatusCodes.ACCEPTED).json(dB);
  } catch (error) {}
};

/// Transfer
export const transfer = async (req: Request, res: Response) => {
  try {
    let accountDb = await create2();
    let transactionsDb = await create1();

    const indexFrom = accountDb.findIndex(
      (each: Balance) => each.account === req.body.from,
    );
    const indexTo = accountDb.findIndex(
      (each: Balance) => each.account === req.body.to,
    );

    if (req.body.amount > accountDb[indexFrom].balance) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'insufficient amount' });
    } else {
      const sample1 = {
        ...accountDb[indexFrom],
        balance: accountDb[indexFrom].balance - req.body.amount,
        createdAt: accountDb[indexFrom].createdAt,
      };
      accountDb[indexFrom] = sample1;
      const sample2 = {
        ...accountDb[indexTo],
        balance: accountDb[indexTo].balance + req.body.amount,
        createdAt: accountDb[indexTo].createdAt,
      };
      accountDb[indexTo] = sample2;
      fs.writeFile(balancesPath, JSON.stringify(accountDb, null, 3), (err) => {
        console.log(err);
      });
      const transactions = {
        reference: uuidv4(),
        senderAccount: req.body.from,
        amount: req.body.amount,
        receiverAccount: req.body.to,
        transferDescription: 'successfull',
        createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
      };
      transactionsDb.push(transactions);
      fs.writeFile(
        transactionsPath,
        JSON.stringify(transactionsDb, null, 3),
        (err) => {
          res.status(StatusCodes.ACCEPTED).json(transactions);
        },
      );
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'Account number not found' });
  }
};

export { createAccount, getAccount, getAllAccount };
