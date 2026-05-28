class CadastroError extends Error {
  constructor(campos) {
    super("Erro de validação no cadastro");
    this.name = "CadastroError";
    this.campos = campos;
  }
}

function validarCadastro(dados) {
  const erros = [];

  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.push({
      campo: "nome",
      mensagem: "Nome é obrigatório e deve ter no mínimo 3 caracteres",
    });
  }

  if (!dados.email || !dados.email.includes("@")) {
    erros.push({
      campo: "email",
      mensagem: "Email é obrigatório e deve conter @",
    });
  }

  if (!dados.senha || dados.senha.length < 6) {
    erros.push({
      campo: "senha",
      mensagem: "Senha é obrigatória e deve ter no mínimo 6 caracteres",
    });
  }

  if (dados.idade === undefined || dados.idade === null || dados.idade < 18) {
    erros.push({
      campo: "idade",
      mensagem: "Idade é obrigatória e deve ser maior ou igual a 18",
    });
  }

  if (erros.length > 0) {
    throw new CadastroError(erros);
  }

  return true;
}

function processarCadastro(dados) {
  try {
    validarCadastro(dados);

    return {
      sucesso: true,
      dados: {
        nome: dados.nome,
        email: dados.email,
        idade: dados.idade,
      },
    };
  } catch (erro) {
    if (erro instanceof CadastroError) {
      return {
        sucesso: false,
        erros: erro.campos,
      };
    }

    return {
      sucesso: false,
      erros: [{ campo: "geral", mensagem: "Erro inesperado: " + erro.message }],
    };
  }
}

console.log("=== Dados válidos ===");
console.log(
  processarCadastro({
    nome: "João Silva",
    email: "joao@email.com",
    senha: "123456",
    idade: 20,
  })
);

console.log("\n=== Dados inválidos ===");
console.log(
  processarCadastro({
    nome: "Jo",
    email: "email-invalido",
    senha: "123",
    idade: 16,
  })
);
