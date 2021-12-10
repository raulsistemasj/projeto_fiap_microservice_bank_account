const mongoose = require("mongoose");

const url = "ADICIONAR A URL DO MONGODB COM AS CREDENCIAIS"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.Promise = global.Promise;

module.exports = mongoose;