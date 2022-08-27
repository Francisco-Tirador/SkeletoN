const bcrypt=require('bcrypt')
//////////////////////////////////////////
require('dotenv').config()
const port=process.env.PORT
//////////////////////////////////////////
const hashPassord=(plainPassword)=>{
    return bcrypt.hashSync(plainPassword,10)
}
//////////////////////////////////////////

const comparPassword=(plainPassword,hashPassord)=>{
 return bcrypt.compareSync(plainPassword,hashPassord)
}
//////////////////////////////////////////

module.exports={
    hashPassord,
    comparPassword,
   port
}

/*
{
        
    "name":"ranco",
   "emeil":"Rang@has.com",
    "password":"goku1234",
    "phone":54654654654654,
    "age":21,
    "profile_image":"url"
} 
*/