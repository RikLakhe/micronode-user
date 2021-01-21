import knex from "../db/connection";
import {USERS} from "../constants/table"

/**
 * Fetch all users
 * 
 * @returns {Array}
 * 
 */
export async function getAllUsers(){
    const data = await knex(USERS);
    return data;
}

/**
 * Fetch user by Identification
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function getUserById(id){
    const data = await knex(USERS).select().where({"user_id": id});
    return data;
}

/**
 * Fetch user by Email
 * 
 * @params {String} email
 * @returns {Array}
 * 
 */
export async function getUserByeEmail(id){
    const data = await knex(USERS).select().where({"user_email": email});
    return data;
}

/**
 * Create user
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function createUser(data){
    const data = await knex(USERS).insert(data).returning("*").then(rows => {return rows[0];});
    return data;
}

/**
 * Update user
 * 
 * @params {Object} data
 * @returns {Array}
 * 
 */
export async function updateUser(data){
    const data = await knex(USERS).update(data).where('user_id',id).returning("*").then(rows => {return rows[0];});
    return data;
}

/**
 * Delete user
 * 
 * @params {String} id
 * @returns {Array}
 * 
 */
export async function deleteUser(id){
    const data = await knex(USERS).delete().where('user_id',id)
    return data;
}