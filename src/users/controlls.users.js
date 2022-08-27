//? Controladores de informacion
//?Aqui van la logica de donde van las acciones de la informacion

const uuid=require('uuid')
const {hashPassord,comparPassword}= require('./utills/crypt')
//? //////////////////////////////////////////////


const usersArr=[]


const getAllUsers = ()=>{
    return usersArr
}
//? //////////////////////////////////////////////
const getUserById=(data,id)=>{
const index= usersArr.filter(item=>item.id=id)
return index[0]?index[0]:false
}

//? //////////////////////////////////////////////
const createUser= (data)=>{


if(data.name&&data.emeil&&data.password&&data.age&&data.profile_image){
    const newUser={
        id:uuid.v4(),//unico//?nos crea un id aleatorio
        name:data.name,
        emeil:data.emeil,//unico
        password:hashPassord(data.password),
        phone:data.phone?data.phone:'', //?estos datos son opcionales
        age:data.age,
        rol:'normal',
        profile_image:data.profile_image?data.profile_image:'',//?estos datos son opcionales
        active:true,
        verified:false    
    } 
    usersArr.push(newUser)
    return usersArr
}else{
    return false
}






}
//? //////////////////////////////////////////////

const deleteUser =(id)=>{
    const index = usersArr.findIndex(item=>item.id===id)
    

    if(index!==-1){
        usersArr.splice(index,1)
    }else{
        return false
    }


   //! return index !== -1 
   //?aqui se devuelve true o false dependiendo de si es -1

}

const upDateUser=(data,id)=>{
    const index = usersArr.findIndex(item=>item===id)
    if(index!==1){
        usersArr[index]={
            id:id,
            name:data.name,
            emeil:data.emeil,//unico
            password:hashPassord(data.password),
            phone:data.phone?data.phone:'', //?estos datos son opcionales
            age:data.age,
            rol:'normal',
            profile_image:data.profile_image?data.profile_image:'',//?estos datos son opcionales
            active:true,
            verified:false  

        } 
           return  usersArr[index]
    }else{return false}
    
}




module.exports={
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    upDateUser
}
