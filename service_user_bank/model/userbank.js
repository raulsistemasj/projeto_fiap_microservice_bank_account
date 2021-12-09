const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;
const table_account_bank = mongoose.Schema({
    nome_banco:{type:String, required: true},
    tipo_conta:{
        type:String, 
        enum : {
            values: ['conta_corrente','conta_poupança'],
            message: '{VALUE} não suportado',
            default: 'conta_correte'
        },
        required: true
    },
    nome_titular:{type:String, required: true},
    limite_cartao:{type:Number, required: true},
    saldo_conta:{type:Number, required: true},
    createdat:{type:Date,default:Date.now}
});

module.exports = mongoose.model("bank_account",table_account_bank);