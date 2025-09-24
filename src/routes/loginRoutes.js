import { Router } from "express";
import LoginController from "../controller/loginController.js";

const loginRoutes = Router();

loginRoutes.get("/login", LoginController.getLogin);
loginRoutes.get("/logged", LoginController.getIsLogged);

export default loginRoutes;
