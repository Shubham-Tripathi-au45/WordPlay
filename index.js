const express=require("express")
const app=express()
app.use(express.static("public"))
const PORT=process.env.PORT || 8000
app.use('/',(req,res)=>{
    res.sendFile("C:/Users/91760/OneDrive/Desktop/WordPlay/public/word.html")
})
app.listen(PORT,()=>{
console.log("Port started at 8000")
})