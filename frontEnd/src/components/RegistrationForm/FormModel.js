export default class User {

    static ATTRIBUTES = ["Username", "Password"]

    constructor(map){
        this.attributes = map;
    }

    toString(){
        let userString = `\tUser:`
        this.attributes.forEach((value, key) => {
            userString+=`\n\t\t${key}:\t${value}`
        })
        return userString;
    }

    static USER_ATTR_MAP(){
        const attr_map = new Map();
        User.ATTRIBUTES.forEach(attribute => {
            attr_map.set(attribute, undefined)
        });
        return attr_map;
    }


    getUsername(){
        return this.attributes.get("Username")
    }

    getPassword(){
        return this.attributes.get("Password")
    }
}
