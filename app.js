const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const {usermodel} = require ("./models/users")
 
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://rizna10:rizna2003@cluster0.u7ke2.mongodb.net/usersdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/login",(req,res)=>{
    res.send("hello")
})

app.post("/signup",(req,res)=>{
    let input = req.body
    let user = new usermodel(input)
    user.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8082,()=>{
    console.log("Server Started")
})
