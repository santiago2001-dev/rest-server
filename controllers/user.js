const { response } = require("express");
const req = require("express/lib/request");


const getUser =(req,res)=>{
    res.json({
        msg : 'obteniendo usuarios'
    })
}


const putUser = (req,res)=>{
    res.json({
        msg: 'edit user'
    })
}

const posttUser = (req,res = response)=>{ 
    const body = req.body;
    res.json({
        msg: 'edit user',
        body
    })

    console.log(body)
}

const deletetUser = (req,res)=>{
    res.json({
        msg: 'edit user'
    })
}
const pathUser = (req,res)=>{
    res.json({
        msg: 'edit user'
    })
}






module.exports = {
    getUser,
    putUser,
    deletetUser,
    posttUser,
    pathUser
}