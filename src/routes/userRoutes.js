import {
    Router
} from 'express'
import * as userController from '../controller/user'

let router = Router();

try{

    router.get('/', userController.findAll)
    router.get('/:id', userController.findById)
    router.post('/', userController.create)
    router.put('/:id', userController.updateById)
    router.delete('/:id', userController.deleteById)
}catch(e){
console.log('eeee',e)
}

export default router;