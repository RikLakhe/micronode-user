import pool from '#root/db/connection'
import generateUUID from "#root/helper/generateUUID";
import {hashPassword} from "#root/helper/passwordUtils";

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY sn ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getUserById = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const id = generateUUID();
    const {name, email, password} = request.body
    const createDate = new Date();
    pool.query('INSERT INTO users (id,user_name, user_email,user_password, create_date, active) VALUES ($1, $2,$3,$4, $5, $6) RETURNING *', [id, name, email, hashPassword(password), createDate, true], (error, results) => {
        if (error) {
            throw error
        }
        console.log('here', results.rows[0])
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const updateUser = (request, response) => {
    const id = request.params.id;
    const {name, email, active} = request.body;
    const updateDate = new Date();
    pool.query(
        'UPDATE users SET user_name = $1, user_email = $2, update_date=$3, active=$4 WHERE id = $5',
        [name, email, updateDate, active, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = (request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
