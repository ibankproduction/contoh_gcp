const { Router } = require("express")
const { user_create } = require("./create")
const { user_delete } = require("./delete")

const user_routes = Router()

user_routes.post("/user/create", user_create)
user_routes.delete("/user/delete/:id", user_delete)

module.exports = user_routes