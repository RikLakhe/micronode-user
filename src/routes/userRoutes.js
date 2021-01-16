import {Router} from 'express'
import db from '../controller/users'

let router = Router();

router.get('/',db.getUsers)
router.get('/:id',db.getUserById)
router.post('/',db.createUser)
router.put('/:id',db.updateUser)
router.delete('/:id',db.deleteUser)

export default router;
