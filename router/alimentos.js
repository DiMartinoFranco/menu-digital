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

module.exports = router;