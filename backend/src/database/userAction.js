import { ORM } from "./connection.js"

export const add_user = async (requestObject) => {
    ORM.users.create({
        username: requestObject.username,
        password: requestObject.password
    })
        .then(result => {
            return {
                message: `\tADDED USER:
        \n\t\tUsername:${requestObject.username}
        \n\t\tPassword:${requestObject.password}`
            }
        })
        .catch(err => console.log(err))
}

export const user_exists = async (requestObject) => {
    return await ORM.users.findAll(
        { where: { username: requestObject.username } })
        .then((rows) => { return rows.length > 0 })
        .catch(err => { throw err })
}