
// Objeto representando um usuário válido
// Este usuário deve passar na validação final
const usuario = {
  nome: "Carlos",
  idade: 20,
  email: "carlos@email.com",
  ativo: true
}

// Objeto representando um usuário inválido
// Este usuário NÃO deve passar na validação final
const usuarioInvalido = {
  nome: "Ana",
  idade: 16,
  email: "anaemail.com",
  ativo: false
}

// DESAFIO
// Verifica se o usuário é maior de idade
function verificarMaiorIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

// Função pronta
// Verifica se o email possui o caractere "@"
function validarEmail(email) {
  return email.includes("@")
}

// DESAFIO
// Verifica se o usuário está ativo
function usuarioAtivo(usuario) {
  if (usuario.ativo === true) {
    return true;
  } else {
    return false;
  }
}

// Esta função combina todas as validações do cadastro
// Ela só retorna true se TODAS as regras forem válidas
function validarCadastro(usuario) {

  const maiorIdade = verificarMaiorIdade(usuario.idade)
  const emailValido = validarEmail(usuario.email)
  const ativo = usuarioAtivo(usuario)

  // Operador lógico AND (&&)
  // Todas as condições precisam ser verdadeiras
  return maiorIdade && emailValido && ativo
}

// Execução no console para validar o exercício
console.log("Usuário 1 válido?", validarCadastro(usuario))
console.log("Usuário 2 válido?", validarCadastro(usuarioInvalido))

// NÃO ALTERAR
// Essas exportações serão usadas no próximo módulo
// para criar testes automatizados com Jest
module.exports = {
  verificarMaiorIdade,
  validarEmail,
  usuarioAtivo,
  validarCadastro
}
