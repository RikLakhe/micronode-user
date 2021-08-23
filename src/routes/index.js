import {Router} from 'express'

import userRoutes from "./userRoutes";

const publicRouter = Router();

publicRouter.get('/', (request, response) => {
    response.json({info: 'v1 !!!!'})
})
publicRouter.use('/users',userRoutes);

export default publicRouter;
