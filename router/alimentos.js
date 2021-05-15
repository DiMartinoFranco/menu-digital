const express = require("express");
const router = express.Router();

const Alimento = require("../models/alimento");

router.get("/", async (req, res) => {
    try {
        const arrayAlimentosDB = await Alimento.find();

        res.render("alimentos", {
            arrayAlimentos: arrayAlimentosDB,
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/crear", (req, res) => {
    res.render("crear");
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const alimentoDB = await Alimento.findOne({ _id: id });
        
        console.log(alimentoDB);

        res.render("detalle", {
            alimento: alimentoDB,
            error: false,
        });
    } catch (error) {
        res.render("detalle", {
            error: true,
            mensaje: "NO TA ESE ALIMENTO VITEH",
        });
    }
});

router.post("/", async (req, res) => {
    const body = req.body;
    try {
        const alimentoDB = new Alimento(body);
        await alimentoDB.save();
        res.redirect("/alimentos");
    } catch (error) {
        console.log(error);
    }
});


router.delete('/:id', async(req, res)=>{
    const id= req.params.id

    try {
        const mascotaDB= await Alimento.findByIdAndDelete({_id: id})
        
        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'eliminado!'
            })

            
        }else{
            res.json({
                estado: false,
                mensaje: 'no se pudo eliminar!'
            })
           
        }
    } catch (error) {
        console.log(error);
        
    }
})


router.put('/:id', async(req, res)=>{

    const id= req.params.id
    const body=req.body
    
    try {

        const mascotaDB= await Alimento.findByIdAndUpdate(
            id,
            body,
            {useFindAndModify:false}
            )

            console.log(mascotaDB)

            res.json({
                estado: true,
                mensaje: 'Editado'
            })
            
        
    } catch (error) {
        res.json({
            estado: false,
            mensaje: 'No Se Pudo Editar'
        })
    }
})
module.exports = router;
