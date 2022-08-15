export default class LoginRequestObject {
    constructor(loginInfoObject) {
        this.username = loginInfoObject.getUsername()
        this.password = loginInfoObject.getPassword()
    }

    toString(){
        return `\tUsr:
        \n\t\tUsername: ${this.username}
        \n\t\tPassword: ${this.password}`
    }

}