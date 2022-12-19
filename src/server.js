import express from "express"
import morgan from "morgan"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"

const app = express();
const logger = morgan("dev");
app.use(logger)

const port = 4000

app.use("/", globalRouter)
app.use("/videos", videoRouter)
app.use("/users", userRouter)

const handleListening = () => 
	console.log( `Server listening on port http://localhost:${port} 🚀`)

app.listen(port, handleListening)