import express from 'express';
const router = express.Router();
import {
  createAccount,
  getAccount,
  getAllAccount,
  transfer,
} from '../controllers/indexController';
// import { transferError } from '../utils';

router.route('/create-account').post(createAccount);
router.route('/balance/:id').get(getAccount);
router.route('/balance').get(getAllAccount);
router.route('/transfer').post( transfer);
export default router;
