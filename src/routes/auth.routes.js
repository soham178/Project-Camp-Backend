import {Router} from "express";
import {registerUser,login} from "../controllers/auth.contollers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator, userLoginvalidator} from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);

router.route("/login").post(userLoginvalidator(), validate, login);

export default router; 