import sequelize from "sequelize";
// import { DB_connection } from "../../connection.js";

const TABLE_NAME = `Users`
export default {
    id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    username: sequelize.STRING,
    password: sequelize.STRING,
};