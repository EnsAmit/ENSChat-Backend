import {Router} from 'express'
import * as appMessageDetailsController from '../../controllers/message/message.controller.js'

const appMessageDetailsRouterV1 = Router()

appMessageDetailsRouterV1.route('/addMessage').post(appMessageDetailsController.addMessage);
appMessageDetailsRouterV1.route('/getMessage').post(appMessageDetailsController.getMessage);

export  { appMessageDetailsRouterV1 }