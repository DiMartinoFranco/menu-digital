const express = require("express");
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"));

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/menuvegano", (req, res) => {
    res.render("menuvegano");
});

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
