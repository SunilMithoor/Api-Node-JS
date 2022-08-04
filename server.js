const express = require('express')
const cors = require('cors')
const cookieSession = require("cookie-session")
const dotenv = require('dotenv')
const app = express()

dotenv.config()

// middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(
    cookieSession({
        name: process.env.COOKIE_SESSION_NAME,
        secret: process.env.COOKIE_SESSION_SECRET, // should use as secret environment variable
        httpOnly: true,
    })
)

// routers
const router = require('./routes/onBoardingRouter.js')
app.use('/api/v1/users', router)


//port
const { DB_PORT } = process.env;
const PORT = process.env.PORT || DB_PORT;

// welcome message
app.get("/", (req, res) => {
    res.json({ message: "Welcome to sunil application." });
});

//server
app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port :", PORT);
})

