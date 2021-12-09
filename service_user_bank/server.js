const express = require('express');
const cors = require('cors');
const bank = require('./usecase/bank');
const auth = require('./middleware/auth');
const config = require('./config/config');

const app = express();
const router = express.Router();

app.use(express.json());

app.use(cors());

// api de health check
router.get('/health', function(req, res){
    res.json({message:'success'});
});

// api do usuario
router.get('/cliente/',cors(config),auth,(req,res)=>{
    bank.consultar(res);
})

router.post('/cliente/cadastrar',cors(config),auth,(req,res)=>{
    bank.cadastrar(req,res);
})

router.put('/cliente/atualizar/conta',cors(config),auth,(req,res)=>{ 
     bank.atualizar(req,res);
})

app.use('/api', router);


app.listen(3000,()=>console.log("Servidor online em http://localhost:3000"));