const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3080
const connection = require("./database/database")
const deviceModel = require("./database/Devices")
const categoryModel = require("./database/Categories")
const Devices = require("./database/Devices")
const cors = require('cors')


// Database
connection.authenticate().then(() => {
    console.log("Conexão com banco de dados feita com sucesso!")
}).catch((msgErro) => {
    console.log(msgErro)
})


app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/aws-challenge/dist/aws-challenge/"));
app.use(cors())

app.get('/', (req,res) => {
    console.log("Entrando na home")
    res.sendFile(process.cwd()+"/aws-challenge/dist/aws-challenge/index.html",)
});

app.get('/device', (req,res) => {
    console.log("Entrando no device")
    Devices.create({
        name: "Teste",
        category: "Teste",
        color: "Teste",
        partNumber: 123
    }).then(() => {
        console.log("Aumentando o DB")
    })
    res.sendFile(process.cwd()+"/aws-challenge/dist/aws-challenge/index.html")
});

app.get('/category', (req,res) => {
    console.log("Entrando na category")
    res.sendFile(process.cwd()+"/aws-challenge/dist/aws-challenge/index.html")
});

app.get('/about', (req,res) => {
    console.log("Entrando na about")
    res.sendFile(process.cwd()+"/aws-challenge/dist/aws-challenge/index.html")
});

app.post("/device", (req,res) =>{

  console.log(req.body)

})


app.get("/deviceread", (req,res) => {
  Devices.findAll({raw: true}).then(perguntas => {
    res.status(200).send(perguntas)
  })
})

app.get('/deviceerr', (req,res) => {
  setTimeout(() => {
    res.status(500).send({
      msg: "Error msg from the server"
    })
  },2000)
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});