const express=require("express")
const app=express()

const path=require("path")
const library=path.join(__dirname,'/public')

app.use(express.static(library))
const PORT=process.env.PORT || 8000
app.use('/',(req,res)=>{
    res.sendFile(`${library}/word.html`)
})
app.listen(PORT,()=>{
console.log("Port started at 8000")
})