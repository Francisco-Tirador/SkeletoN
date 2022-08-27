const express = require('express')
const {port}=require('./users/utills/crypt')
const ruta=require('./users/users.router').router
//?dependecncias

const app=express()
app.use (express.json()) // ? esto nos da el poder de utilizar req.body,y params
    

app.get('/',(req,res)=>{
res.status(200).json({messege:"All ready"})

})

app.use('/api/v1',ruta)



// const port =Element.

app.listen(port,()=>{
    console.log(`Stardet in the port ${port} `)
})