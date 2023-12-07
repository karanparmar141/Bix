const express = require("express")
const connect = require("./db")
const UserModel = require("./user.modal")
const cookie = require("cookie-parser")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(cookie())
app.use(express.json())

app.post("/signup" , async(req , res) =>{
    let {username , email , password} = req.body
    
    let data = await UserModel.findOne({email : email})
    if(data){
        res.json("user already exists")
    }
    else{
        bcrypt.hash(password , 5 , async(err , hash) =>{
            if(err){
                res.json(err)
            }
            else{
                let obj ={
                    username : username,
                    email : email,
                    password : hash
                }
                let data = await UserModel.create(obj)
                res.json(data)
            }
        })
    }
})

app.post("/login" , async(req , res) =>{
    let {email , password} = req.body
    
    let data = await UserModel.findOne({email : email})
    if(data){
        bcrypt.compare(password , data.password , (err , result) =>{
            if(result){
                let token = jwt.sign({id : data._id} , "pass")
                res.cookie("token" , token).jsonp("login succssfully")
            }
            else{
                res.json("password is incorrect")
            }
        })
    }
    else{
        res.json("user is not found please register first")
    }
})

app.get("/data" , async(req , res)=>{
    let data = await UserModel.find()
    res.json(data)
})
app.listen(8090 , () =>{
    connect()
    console.log("port is start 8090")
})