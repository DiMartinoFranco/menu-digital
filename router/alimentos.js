const express = require('express');
const router = express.Router();

const Alimento= require('../models/alimento');

router.get('/', async(req, res) => {

    try {

        const arrayAlimentosDB= await Alimento.find();
        

        res.render("alimentos", {
            arrayAlimentos: arrayAlimentosDB,
        })
        
    } catch (error) {
        console.log(error);
    }




    
})


router.get('/crear', (req, res)=>{
    res.render('crear');
})


router.post('/', async (req, res)=>{
    const body=req.body;
    try {
        const alimentoDB= new Alimento(body);
        await alimentoDB.save();
        res.redirect("/alimentos")
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;