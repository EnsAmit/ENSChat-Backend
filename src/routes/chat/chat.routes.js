import { Router } from 'express';
import * as appChatDetailsController from '../../controllers/chat/chat.controller.js'

const appChatDetailsRouterV1 = Router();

appChatDetailsRouterV1.route('/addChat').post(appChatDetailsController.addChat)
appChatDetailsRouterV1.route('/getChat').post(appChatDetailsController.getChat)
appChatDetailsRouterV1.route('/searchChat').post(appChatDetailsController.searchChat)

export { appChatDetailsRouterV1 };