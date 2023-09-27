const { request, response } = require("express");
const db = require("../../../connection");


const user_delete = async (req = request, res = response) => {
    try {
        const { id } = await req.params
        const result = await db.users.delete({
            where: {
                id: parseInt(id)
            }
        })
        return res.status(201).json({
            success: true,
            message: `Success delete user with id ${result.id}`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = { user_delete }