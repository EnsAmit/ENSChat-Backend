import Message from '../../models/message/message.model.js'
import {createError} from '../../helpers/common/backend.functions.js'

const addMessage = async (req, res, next) => {
    const { sender, content, chat } = req.body;
    if (!sender || !chat || sender == '' || chat == '') {
        return next(createError(400, "plz provide the required feild"))
    }
    try {
        const newMessage = await Message.create(req.body);
        const result = await newMessage.save()
        if (!result) {
            return next(createError(500, 'Internal server error: Failed to save data'))
        }
        return res.status(201).json({
            message: "message save successfully"
        })
    }
    catch (error) {
        return next(error)
    }
}

const getMessage = async (req, res, next) => {
    const { chat } = req.body;
    if (!chat || chat == '') {
        return next(createError(400, "plz provide the required feild"))
    }
    try {
        const result = await Message.find(req.body)
        if (!result) {
            return next(createError(500, 'Internal server error: Failed to save data'))
        }
        return res.status(200).json({ data: result })
    }
    catch (error) {
        return next(error)
    }

}

export { addMessage, getMessage }