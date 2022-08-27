const router=require('express').Router()

const http=require('./users.http')





router.route('/users')
    .get(http.getAll) 
    .post(http.register)

router.route('/users/:id')
    .get(http.getById0)


    module.exports={
        router
    }