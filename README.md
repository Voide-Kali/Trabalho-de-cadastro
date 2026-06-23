# Trabalho de Cadastro

Exemplo em JavaScript para validação e processamento de cadastro com regras simples de negócio.

## Arquivos

- `cadastro.js`: valida os dados e retorna sucesso ou erro estruturado
- `README.md`: visão geral do projeto

## Regras de validação

- nome com no mínimo 3 caracteres
- email com `@`
- senha com no mínimo 6 caracteres
- idade maior ou igual a 18

## Como usar

Execute o arquivo diretamente para ver um exemplo de entrada válida e inválida.

```bash
node cadastro.js
```

Se quiser usar como módulo:

```js
const { processarCadastro } = require("./cadastro");
```

## Estrutura local

Este repositório está sendo usado também como workspace de organização. Pastas como `Escola/`, `Organizado/` e `Projetos/` ficam fora do Git e são ignoradas.
