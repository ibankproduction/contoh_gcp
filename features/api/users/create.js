const { request, response } = require("express")
const db = require("../../../connection")

const user_create = async (req = request, res = response) => {
    try {
        const data = await req.body
        const result = await db.users.create({
            data: data
        })
        return res.status(201).json({
            success: true,
            query: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }

}

module.exports = { user_create }