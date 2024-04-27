const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const usuarios = [
  "Juan",
  "Jocelyn",
  "Astrid",
  "Maria",
  "Ignacia",
  "Javier",
  "Brian",
];


app.get("/abracadabra/usuarios", (req, res) => {
    res.json(usuarios);
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const Usuario = req.params.usuario;
    const usuariosAuth = usuarios.some(
      (usuario) => usuario === Usuario
    );
  
    usuariosAuth
      ? res.sendFile(__dirname + "/public/index.html")
      : res.send('<img src="/assets/who.jpeg">');
  });

app.get("/abracadabra/conejo/:n", (req, res) => {
    const num = Math.floor(Math.random() * (4 - 1)) + 1;
    const n = req.params.n;

if (num == n) {
    res.sendFile(__dirname + "/public/assets/conejito.jpg");
} else {
    res.sendFile(__dirname + "/public/assets/voldemort.jpg");
}});

//404 y PORT
app.get("*", (req, res) => {
    res.send("Esta página no existe.")
})

app.listen(3000, () => {
console.log("Servidor levantado correctamente en el puerto: ", PORT)
})