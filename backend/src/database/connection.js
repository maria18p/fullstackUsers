import { setup_database } from "./setup/databaseSetup.js"
import { tables_setup } from "./setup/tablesSetup.js";
import { add_user, user_exists } from "./userAction.js";


export let ORM;


export const createConnection = async () => {
    await setup_database();
    ORM = await tables_setup();
}


export const register = async (requestObject) => await add_user(requestObject)

export const login = async (requestObject) => user_exists(requestObject)

