import { Router } from "express";
import { signup, login ,getUsers} from "../controllers/user.controller";
import { userMiddleware } from "../middlewares/user.middleware";



const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/get-all", userMiddleware, getUsers);


export default router;