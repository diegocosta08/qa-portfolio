
const {
  verificarMaiorIdade,
  validarEmail,
  usuarioAtivo,
  validarCadastro
} = require('./usuario');

// Testes da função verificarMaiorIdade
describe('verificarMaiorIdade', () => {
  test('deve retornar true para maiores de idade', () => {
    expect(verificarMaiorIdade(20)).toBe(true);
  });

  test('deve retornar true para quem tem exatamente 18 anos', () => {
    expect(verificarMaiorIdade(18)).toBe(true);
  });

  test('deve retornar false para menores de idade', () => {
    expect(verificarMaiorIdade(17)).toBe(false);
  });
});

// Testes da função validarEmail
describe('validarEmail', () => {
  test('deve retornar true para email válido', () => {
    expect(validarEmail('carlos@email.com')).toBe(true);
  });

  test('deve retornar false para email sem @', () => {
    expect(validarEmail('anaemail.com')).toBe(false);
  });
});

// Testes da função usuarioAtivo
describe('usuarioAtivo', () => {
  test('deve retornar true para usuário ativo', () => {
    expect(usuarioAtivo({ ativo: true })).toBe(true);
  });

  test('deve retornar false para usuário inativo', () => {
    expect(usuarioAtivo({ ativo: false })).toBe(false);
  });
});

// Testes da função validarCadastro
describe('validarCadastro', () => {
  test('deve aprovar cadastro com todos os dados válidos', () => {
    const usuario = {
      nome: 'Carlos',
      idade: 20,
      email: 'carlos@email.com',
      ativo: true
    };

    expect(validarCadastro(usuario)).toBe(true);
  });

  test('deve reprovar cadastro de menor de idade', () => {
    const usuario = {
      nome: 'Ana',
      idade: 16,
      email: 'ana@email.com',
      ativo: true
    };

    expect(validarCadastro(usuario)).toBe(false);
  });

  test('deve reprovar cadastro com email inválido', () => {
    const usuario = {
      nome: 'Carlos',
      idade: 20,
      email: 'carlos.email.com',
      ativo: true
    };

    expect(validarCadastro(usuario)).toBe(false);
  });

  test('deve reprovar cadastro de usuário inativo', () => {
    const usuario = {
      nome: 'Carlos',
      idade: 20,
      email: 'carlos@email.com',
      ativo: false
    };

    expect(validarCadastro(usuario)).toBe(false);
  });
});
