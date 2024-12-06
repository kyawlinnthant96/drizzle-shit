import express from "express";
import cors from "cors";
import {env} from "./config/env-validation"
import routes from "./routes";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', routes)

const port = env.PORT;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})