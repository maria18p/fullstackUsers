import axios from "axios";
import LoginRequestObject from "./LoginRequestModel";

const SERVER_URL = 'http://localhost:5000';

export const makeLoginRequest = async (loginInfo) => {
    const requestURL = SERVER_URL + "/login"
    const requestObj = new LoginRequestObject(loginInfo);
    let res = await axios.post(requestURL, requestObj);
    alert(await res.data.Message)
    // console.log(res.data)
}