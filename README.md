# Projeto_fiap_microservice_bank_account
Micro serviço para criação e atualização de dados bancários.
Projeto feito para o modulo de microserviço do curso Fiap mobile.
path:
/api/cliente/cadastrar
/api/cliente
/api/cliente/atualizar/conta
/api/health

# Install e subida do servidor
baixar o projeto, abrir a pasta service_user_bank no vscode, abra o terminal e execute o comando nmp install, para subir a aplicação execute o comando nodemom.
Caso não tenha o nodemon instalado na maquina execute o npm install nodemon.

# Configurando url do MongoDB
Devido a segurança não esta disponivel a url de teste do banco utilizado na construção.
Dentro do diretório database existe um arquivo de conf do banco chamado mongoose.js, dentro dele tem uma constante chamda ulr,
nela adicionar a url do mongodb com as credencias.
Um banco do mongo pode ser criado diretamente pela própria plataforma do mongodeb.com
https://www.mongodb.com/pt-br/cloud/atlas/efficiency

# Funcionalidades 
Cadastro de dados bancarios campos obrigátorios, autenticação obrigatória:
Adicionar no header o token = ""
{
    "nome_banco": "",
    "tipo_conta": "",
    "nome_titular": "",
    "limite_cartao": "",
    "saldo_conta":""
}

Consultar dados bancarios, autenticação obrigatória, retorna todos as contas para obter os ids afim de utilizar para a atualização:
Adicionar no header o token = ""

Atualização de dados bancários, autenticação obrigatória, pode ser atualizado qualquer campo id obrigatorio e deve ser o retornado na consulta:
Adicionar no header o token = ""

{
    "id" : "",
    "nome_titular" : "",
    "limite_cartao"  : ""

}


# Autor Raul M Ferreira

