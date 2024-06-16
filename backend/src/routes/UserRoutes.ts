import { login, register } from '../controller/UserController';
import express from 'express';

const router = express.Router();

router.route("/new").post(register);
router.route("/login").post(login);

export default router;