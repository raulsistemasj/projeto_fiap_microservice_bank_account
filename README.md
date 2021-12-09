# projeto_fiap_microservice_bank_account
Micro serviço para criação e atualização de dados bancários.
Projeto feito para o modulo de microserviço do curso Fiap mobile.
path:
/api/cliente/cadastrar
/api/cliente
/api/cliente/atualizar/conta
/api/health

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

