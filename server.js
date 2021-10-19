const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3080
const connection = require("./database/database")
const deviceModel = require("./database/Devices")
const categoryModel = require("./database/Categories")
const Devices = require("./database/Devices")
const Categories = require("./database/Categories")
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
    res.sendFile(process.cwd()+"/aws-challenge/dist/aws-challenge/index.html",)
});

app.get('/device', (req,res) => {
    console.log("Entrando no device")
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
  console.log("Requisição de devices realizada!")
  Devices.findAll({raw: true}).then(devices => {
    res.status(200).send(devices)
  })
})

app.get("/categoryread", (req,res) => {
  console.log("Requisição de categories realizada!")
  Categories.findAll({raw: true}).then(categories => {
    res.status(200).send(categories)
  })
})

app.get('/devicedelete/:id', (req,res) => {
  Devices.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
    if(rowDeleted === 1){
       console.log('Deleted successfully');
     }
  }, function(err){
      console.log(err); 
  })
  Devices.findAll({raw: true}).then(devices => {
    res.status(200).send(devices)
  })
})

app.get('/categorydelete/:id', (req,res) => {
  Categories.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
    if(rowDeleted === 1){
       console.log('Deleted successfully');
     }
  }, function(err){
      console.log(err); 
  })
  Categories.findAll({raw: true}).then(categories => {
    res.status(200).send(categories)
  })
})

app.post("/categorycreate", (req,res) => {
  Categories.create({
      name: req.body.name,
  }).then(() => {
      console.log("Aumentando o DB")
      Categories.findAll({raw: true}).then(categories => {
        res.status(200).send(categories)
      })
  })
})

app.post("/devicecreate", (req,res) => {
  Devices.create({
      name: req.body.name,
      category: req.body.category,
      color: req.body.color,
      partNumber: req.body.partNumber
  }).then(() => {
      console.log("Aumentando o DB")
      Devices.findAll({raw: true}).then(devices => {
        
        res.status(200).send(devices)
      })
  })
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});