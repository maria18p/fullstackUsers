import sequelize from "sequelize";
import UsersSchema from "../Table Schemas/UsersSchema.js";

const DB_NAME = `systema`;

export const tables_setup = async () => {
    const dbConnection = await createDBConnection()
    const ORM_OBJ = await define_ORM_tables(dbConnection);
    await validate_users_table(ORM_OBJ.users);
    return ORM_OBJ;
}

const createDBConnection = async () => {
    return await new sequelize(
        DB_NAME,
        'root',
        'maria1234',
        {
            dialect: 'mysql',
            host: 'localhost',
            logging: false
        }
    );
}

const define_ORM_tables = async (dbConnection) => {
    const usersTableConn = await dbConnection.define("Users", UsersSchema)
    return {
        users: usersTableConn
    }
}

const validate_users_table = async (usersTable) => {
    usersTable.findAll({})
        .then(async () => { console.log("USERS TABLE VALIDATED"); })
        .catch(err => {
            console.log("TABALE 'USERS' NOT FOUND");
            console.log("CREATING 'USERS' TABLE");
            usersTable.sync();
        }
        )
}
