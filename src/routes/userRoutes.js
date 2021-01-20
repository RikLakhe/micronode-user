import {Router} from 'express'
import userController from '../controller/userController'
import {hashPassword} from "../helper/passwordUtils";
import generateUUID from "../helper/generateUUID";

let router = Router();

router.get('/', (req, res) => {
    userController.getAll().then(dbData => {
        res.json(dbData);
    }).catch(err => {
        res.status(400);
        res.json({
            message: err.message,
        });
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    userController.getUserById(id).then(dbData => {
        res.json(dbData);
    }).catch(err => {
        res.status(400);
        res.json({
            message: err.message,
        });
    })
})


router.post('/', (req, res) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        res.status(400);
        res.json({
            message: "Field missing",
        });
    } else {
        const id = generateUUID();
        const createDate = new Date();
        const data = {
            user_id: id,
            user_name: name,
            user_email: email,
            user_password: hashPassword(password),
            created_at: createDate,
            active: true
        }

        userController.createUser(data).then(dbData => {
            res.json(dbData);
        }).catch(err => {
            res.status(400);
            res.json({
                message: err.message,
            });
        })
    }
})

router.put('/:id', (req, res) => {
    const {name, email, password, active} = req.body
    const id = req.params.id;
    if (!name || !email || !password || !id) {
        res.status(400);
        res.json({
            message: "Field missing",
        });
    } else {
        const updateDate = new Date();
        const data = {
            user_name: name,
            user_email: email,
            user_password: hashPassword(password),
            updated_at: updateDate,
            active: active
        }

        userController.updateUser(data, id).then(dbData => {
            res.json(dbData);
        }).catch(err => {
            res.status(400);
            res.json({
                message: err.message,
            });
        })
    }
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    userController.deleteUser(id).then(dbData => {
        res.json({
            message: "Data deleted"
        });
    }).catch(err => {
        res.status(400);
        res.json({
            message: err.message,
        });
    })
})

export default router;
