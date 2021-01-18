import pool from '../db/connection'
import generateUUID from "../helper/generateUUID";

const getRoles = (request, response) => {
    pool.query('SELECT * FROM roles ORDER BY sn ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getRolesById = (request, response) => {
    const id = request.params.id;

    pool.query('SELECT * FROM roles WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createRoles = (request, response) => {
    const {name, email} = request.body
    const id = generateUUID();
    const createDate = new Date();
    pool.query('INSERT INTO roles (id,user_name, user_email, create_date) VALUES ($1, $2,$3,$4) RETURNING *', [id, name, email, createDate], (error, results) => {
        if (error) {
            throw error
        }
        console.log('here', results.rows[0])
        response.status(201).send(`Roles added with ID: ${results.rows[0].id}`)
    })
}

const updateRoles = (request, response) => {
    const id = request.params.id;
    const {name, email} = request.body;
    const updateDate = new Date();
    pool.query(
        'UPDATE roles SET user_name = $1, user_email = $2, update_date=$3 WHERE id = $4',
        [name, email, updateDate, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Roles modified with ID: ${id}`)
        }
    )
}

const deleteRoles = (request, response) => {
    const id = (request.params.id)

    pool.query('DELETE FROM roles WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Roles deleted with ID: ${id}`)
    })
}

export default {
    getRoles,
    getRolesById,
    createRoles,
    updateRoles,
    deleteRoles
}
