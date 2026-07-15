import express from 'express'
import router from './router.js'
import {logger} from './middleware.js'

const app = express()

app.use(express.json())

app.use(logger)

app.use("/soldiers", router)


app.use((error, req, res, next)=>{
    res.status(error.statusCode || 500).json({message: error.message||  "something went wrong"})
})

app.listen(3000,()=>{
    console.log("my server is very cool");
    
})