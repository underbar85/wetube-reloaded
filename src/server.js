import express from "express"

const port = 4000
const app = express()

const logger = (req, res, next) => {
	console.log(`${req.method} ${req.url}`)
	next()
}

const handleHome = (req, res) => {
	return res.send("I love middlewares")
}

const handleLogin = (req, res) => {
    return res.send("Login here.")
};


const handleListening = () => 
console.log( `Server listening on port http://localhost:${port} 🚀`)

app.get("/",logger, handleHome)
app.get("/login", handleLogin)

app.listen(port, handleListening)