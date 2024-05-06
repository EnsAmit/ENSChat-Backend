import { Router } from 'express';
import { appUserDetailsRouterV1 } from '../../../routes/auth/auth.routes.js';

const v1 = Router();

// Admin Endpoint Api's
v1.use('/auth', appUserDetailsRouterV1);

export { v1 };
