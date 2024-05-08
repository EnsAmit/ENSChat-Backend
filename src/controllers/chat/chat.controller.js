import Chat from '../../models/chat/chat.model.js'
import User from '../../models/auth/user.model.js'
import {createError} from '../../helpers/common/backend.functions.js'

const addChat = async (req, res, next) => {
    const { userId } = req.body;
    const chatObj = {
        chatName: req.body.chatName,
        members: req.body.members,
    }
    if (!userId) {
        return next(400, "user not exist")
    }
    try {
        const newChat = await Chat.create(chatObj)
        const result = await newChat.save()
        if (!result) {
            return (next(createError(400, "chat not added")))
        }
        return res.status(201).json({ data: newChat })
    }
    catch (error) {
        next(error)
    }
}

const getChat = async (req, res, next) => {
    const { userId } = req.body;

    if (!userId) {
        return next(400, "user not exist")
    }
    try {
        const allChat = await Chat.find({
            members: { $eq: userId }
        }, { members: 1 }).populate({
            path: 'members',
            select: "_id firstName lastName "
        })

        if (!allChat) {
            return next(createError(400, "data not found"))
        }
        return res.status(200).json({
            data: allChat
        })
    }
    catch (error) {
        next(error)
    }
}

const searchChat = async (req, res, next) => {
    const { firstName, userName } = req.body

    let search;
    if (firstName) {
        search = firstName;
    }
    else if (userName) {
        search = userName;
    }
    else {
        return next(createError(400, "enter the required feild"))
    }

    try {
        const userExist = await User.find(req.body)
        if (!userExist) {
            return next(createError(400, "user not exist"))
        }
        return res.status(200).json({
            data: userExist
        })
    }
    catch (error) {
        return next(error)
    }
}



export { addChat, getChat, searchChat }