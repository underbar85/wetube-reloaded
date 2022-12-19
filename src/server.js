import express from "express"
import morgan from "morgan"

const app = express();
const logger = morgan("dev");
app.use(logger)

const port = 3000

const globalRouter = express.Router()
const handleHome = (req, res) => res.send("Home")
globalRouter.get("/", handleHome)

const videoRouter = express.Router()
const handleWatchVideo = (req, res) => res.send("Watch Video")
videoRouter.get("/watch", handleWatchVideo)

const userRouter = express.Router()
const handleEditUser = (req, res) => res.send("Edit User")
userRouter.get("/edit", handleEditUser)


app.use("/", globalRouter)
app.use("/videos", videoRouter)
app.use("/users", userRouter)

// const home = (req, res) => {
// 	console.log("I will respond")
// 	return res.send("hello")
// }

// const login = (req, res) => {
//     return res.send("login")
// };

// app.get("/", home)
// app.get("/login", login)

const handleListening = () => 
	console.log( `Server listening on port http://localhost:${port} 🚀`)

app.listen(port, handleListening)