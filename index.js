import express from 'express'
import router from './router.js'

const app = express()

app.use(express.json())

app.use("/soldiers", router)


app.use((error, req, res, next)=>{
    res.status(error.statusCode || 500).json({message: error.message }|| {message: "something went wrong"})
})

app.listen(3000,()=>{
    console.log("my server is very cool");
    
})