import {Router} from "express";
import * as testControllers from "../controllers/test.controller"
import testRoute from "../routes/test.route"

const routes = Router()

routes.use("/test",testRoute)

export default routes;

