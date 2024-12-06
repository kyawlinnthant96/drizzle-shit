import {Router} from "express";
import * as testControllers from '../controllers/test.controller'


const router = Router();

router.route("/").get(testControllers.getAllTest)

export default router;