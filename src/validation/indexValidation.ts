import { z, AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const createAccountSchema = z.object({
  body: z.object({
    balance: z.number({
      required_error: 'Deposit amount required',
    }),
  }),
});

export const transferSchema = z.object({
  body: z.object({
    from: z
      .string({
        required_error: 'Sender account required',
      })
      .length(10, { message: 'Must be exactly 10 characters long' }),

    to: z
      .string({
        required_error: 'Beneficiary account required',
      })
      .length(10, { message: 'Must be exactly 10 characters long' }),
    amount: z.number({
      required_error: 'Transfer amount required',
    }),
  }),
});

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };
