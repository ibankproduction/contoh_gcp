const { request, response } = require("express");


const home_screen = (req = request, res = response) => {
    const data = {
        title: "Register Page"
    }
    return res.render("index", data)
}

module.exports = { home_screen }