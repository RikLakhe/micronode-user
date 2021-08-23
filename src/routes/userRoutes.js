import {
    Router
} from 'express'
import * as userController from '../controller/user'
import {customLog} from "../helper/log";

let router = Router();

try{
    router.get('/ping', (request, response) => {
        response.json({info: 'ping in user !!!!'})
    })
    router.get('/', userController.findAll)
    router.get('/:id', userController.findById)
    router.post('/', userController.create)
    router.put('/:id', userController.updateById)
    router.delete('/:id', userController.deleteById)
}catch(e){
    customLog("error",e)
}

export default router;
