import pool from '../db/connection'
import generateUUID from "../helper/generateUUID";

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
    const {name, email} = request.body
    const id = generateUUID();
    pool.query('INSERT INTO users (id,user_name, user_email) VALUES ($1, $2,$3) RETURNING *', [id, name, email], (error, results) => {
        if (error) {
            throw error
        }
        console.log('here',results.rows[0])
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const updateUser = (request, response) => {
    const id = request.params.id;
    const {name, email} = request.body;

    pool.query(
        'UPDATE users SET user_name = $1, user_email = $2 WHERE id = $3',
        [name, email, id],
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
