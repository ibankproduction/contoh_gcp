const { request, response } = require("express");
const db = require("../../../connection");


const about_screen = async (req = request, res = response) => {
    const data = await db.users.findMany()
    return res.render("about", { data })
}

module.exports = { about_screen }