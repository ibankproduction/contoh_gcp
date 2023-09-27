const { Router } = require("express");
const { home_screen } = require("./home");
const { about_screen } = require("./about");
const { notfound_screen } = require("./404");

const screen_routes = Router()

screen_routes.get("/", home_screen)
screen_routes.get("/about", about_screen)
screen_routes.get("*", notfound_screen)

module.exports = screen_routes