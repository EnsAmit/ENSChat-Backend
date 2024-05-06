import { Router } from 'express';
import * as appUserDetailsController from '../../controllers/auth/auth.controller.js';
import upload from '../../middlewares/files/upload_file.middleware.js'

const appUserDetailsRouterV1 = Router();

appUserDetailsRouterV1.post('/user-login', appUserDetailsController.registerUser);
appUserDetailsRouterV1.post('/login', appUserDetailsController.loginUser);
appUserDetailsRouterV1.post('/update/:userId', appUserDetailsController.updateUser);
appUserDetailsRouterV1.post('/updatePic', upload(), appUserDetailsController.updatePic);
appUserDetailsRouterV1.post('/profileData', appUserDetailsController.getProfileData);

export { appUserDetailsRouterV1 };
