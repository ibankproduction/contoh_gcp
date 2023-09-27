//PACKAGE
const express = require("express")
const cors = require("cors")
const path = require("path")
const user_routes = require("./features/api/users/routes")
const screen_routes = require("./features/screen/routes")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT

//MIDDLEWARE
app.use(cors())
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

// view
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the correct views directory path

//ROUTES
// SCREEN
app.use(screen_routes)

// API
app.use("/api", user_routes)

//LISTENER
app.listen(PORT, () => { console.log(`listen port PORT`) })