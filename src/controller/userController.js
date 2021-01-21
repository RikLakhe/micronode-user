import knex from "../db/connection";
import {USERS} from "./../constants/table"

export default{
    getAll(){
        return knex(USERS);
    },
    getUserById(id){
        return knex(USERS).select().where({"user_id": id});
    },
    createUser(data){
        return knex(USERS).insert(data).returning("*").then(rows => {return rows[0];});
    },
    updateUser(data,id){
        return knex(USERS).update(data).where('user_id',id).returning("*").then(rows => {return rows[0];});
    },
    deleteUser(id){
        return knex(USERS).delete().where('user_id',id)
    },
    getUserByeEmail(email){
        return knex(USERS).select().where({"user_email": email});
    },
}
