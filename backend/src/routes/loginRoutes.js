import express from "express";
import { login } from "../database/connection.js";

const route = express.Router()

route.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const requestObj = {
        username: username,
        password: password
    }

    if (await login(requestObj)) res.json({ Message: "You are now logged in", code: 1 })
    else res.json({ Message: "Invalid username or password", code: 0 })
})



export default route;