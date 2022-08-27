const {createUser,deleteUser,getAllUsers,getUserById,upDateUser}=require('./controlls.users')


const getAll=(req,res)=>{
    const data=getAllUsers()
res.status(200).json(data)
}

const getById0=(req,res)=>{
    const id=Number(req.params.id) 
    const data=getUserById(id)
    if(data===false){
        res.status(404).json({Err:'Este usuario no existo bro'})
    }else{
        res.status(200).json(data)
    }

} 

const register=(req,res)=>{
    const data=req.body
    const Final=createUser(data)
    if(Final){
        res.status(201).json(Final)
    }else{
        res.status(400).json({err:'Faltan Datos bro'})
    }
}


module.exports={
    getAll,
    getById0,
    register
}