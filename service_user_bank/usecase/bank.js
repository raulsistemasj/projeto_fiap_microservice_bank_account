const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Usuario = require("../model/user");
const Bank = require("../model/userbank");
const Valid = require("../utils/valid")

//Importando nossa function de acesso a dados mongoose
const mongoose = require("../database/mongoose");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


    exports.cadastrar =  (req,res) =>{

        const nome_titular = req.body.nome_titular
        const data = new Bank(req.body);

        Bank.findOne({nome_titular:nome_titular},(erro,ret)=>{
            if(erro) return res.status(500).send('Ocorreu um erro ao cadastrar a conta.');
            if(ret) return res.status(400).send('Cliente já cadastrado'); 

            data.save().then((param)=>{
                res.status(201).send('Nova conta cadastrada')
            }).catch((erro)=>res.status(500).send({erro:`Cadastro não realizado ${erro}`}))
        });
    }
    
    exports.consultar = (res)=>{

        Bank.find((erro,accounts)=>{
            if(erro) return res.status(500).send('Ocorreu um erro ao consutar os dados bancários');
            res.json(accounts);
        })
    }

    exports.atualizar = (req,res)=>{

        if(req.body.id == undefined || Valid.isEmpty(req.body.id)) return res.status(400).send('Id é campo obrigatório!')

        Bank.findByIdAndUpdate(req.body.id,req.body,{new:true},(erro,dados)=>{
            if(erro) return res.status(400).send('Erro ao atualizar conta')
            res.status(200).send('Atualizado com sucesso')
        })
    }

    
