const express  = require("express")
const app = express()
const path = require('path')

app.use('/files',express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
res.sendFile(path.resolve('index.htm'))
})

app.get('*',(req,res)=>{
    res.redirect('/files/error.htm')
})


app.listen(5500,()=>console.log('server is listening on port 5500'))