import express from 'express';
const router = express.Router();
import {
  createAccount,
  getAccount,
  getAllAccount,
  transfer,
} from '../controllers/indexController';

import {
  createAccountSchema,
  transferSchema,
  validate,
} from '../validation/indexValidation';
router
  .route('/create-account')
  .post(validate(createAccountSchema), createAccount);
router.route('/balance/:id').get(getAccount);
router.route('/balance').get(getAllAccount);
router.route('/transfer').post(validate(transferSchema), transfer);
export default router;
