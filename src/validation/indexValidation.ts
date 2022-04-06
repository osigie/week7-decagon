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
      .number({
        required_error: 'Sender account required',
      })
      .positive({ message: 'account must be positive' })
      .int({ message: 'account must be an integer' }),

    to: z
      .number({
        required_error: 'Beneficiary account required',
      })
      .positive({ message: 'account must be positive' })
      .int({ message: 'account must be an integer' }),
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
