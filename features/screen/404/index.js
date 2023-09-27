const { request, response } = require("express");


const notfound_screen = (req = request, res = response) => {
    const data = {
        title: "404 page not found"
    }
    return res.render("404", data)
}

module.exports = { notfound_screen }