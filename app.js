const express = require("express");
const app = express();
const port = process.env.PORT || 3000

//conexion a base de datos
const mongoose = require('mongoose');

const user='admin';
const pass='admin';
const dbname='menudigital'
const uri=`mongodb+srv://${user}:${pass}@cluster0.dklhb.mongodb.net/${dbname}?retryWrites=true&w=majority`;



mongoose.connect(uri, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)

.then(()=> console.log('Base de datos conectada'))
.catch(e=> console.log(e));




//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(express.static(__dirname + "/public"));


app.use('/' , require('./router/rutasWeb'));
app.use('/alimentos' , require('./router/alimentos'));

app.use((req, res, next) => {
    // res.status(404).send("Sorry cant find that!");
    res.status(404).render("404", {
        titulo: "todo esta mal",
        descripcion: "todo este maldito sistema esta mal",
    });
});

app.listen(port, () => {
    console.log(`estoy escuchando en esta direccion http://localhost:${port}`);
});
