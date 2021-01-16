import {Router} from 'express'

import userRoutes from "./userRoutes";

const publicRouter = Router();

publicRouter.use('/users',userRoutes);

export default publicRouter;
