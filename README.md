# Avaliação de Filmes | Exercício 5

Projeto desenvolvido como parte da aula de **Lógica de Programação**, com foco na aplicação de conceitos de JavaScript e na validação de regras de negócio por meio de **7 testes unitários**.

**Autora:** Susane Nogueira  
**Repositório:** https://github.com/susanenogueira/avaliacao-filmes

## Objetivo

Praticar a implementação de lógica de programação para avaliação de filmes e a criação de testes unitários que verifiquem o comportamento esperado da solução. O exercício também contempla a geração de relatórios de execução dos testes.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
| --- | --- |
| JavaScript | Implementação da lógica do exercício |
| Node.js | Ambiente de execução do projeto |
| Mocha | Organização e execução dos testes unitários |
| Chai | Asserções para validação dos resultados |
| Mochawesome | Geração de relatórios de testes em HTML e JSON |
| npm | Instalação de dependências e execução de comandos |

## Estrutura do repositório

```text
avaliacao-filmes/
├── source/
│   └── avaliacaoFilme.js       # Lógica de avaliação de filmes
├── tests/
│   └── avaliacaoFilme.test.js  # Testes unitários
├── .gitignore                  # Arquivos ignorados pelo Git
├── package.json                # Dependências e comandos npm
└── package-lock.json           # Registro das versões instaladas
```

O diretório `mochawesome-report/` é criado ao gerar o relatório e contém os arquivos de saída.

## Testes unitários

O exercício contempla **7 testes unitários** para verificar a lógica de avaliação de filmes. Para consultar os cenários e as asserções implementadas, acesse [`tests/avaliacaoFilme.test.js`](https://github.com/susanenogueira/avaliacao-filmes/blob/main/tests/avaliacaoFilme.test.js).

A execução dos testes permite identificar eventuais falhas e verificar se a implementação atende aos comportamentos esperados.

## Pré-requisitos

- Node.js instalado, com npm disponível.
- Git instalado, caso deseje clonar o repositório.

## Instalação

No PowerShell, execute:

```powershell
git clone https://github.com/susanenogueira/avaliacao-filmes.git
cd avaliacao-filmes
npm install
```

## Execução dos testes

Para executar os testes e acompanhar o resultado no terminal:

```powershell
npm test
```

## Geração e visualização do relatório

Para executar os testes com o Mochawesome e gerar relatórios em **HTML e JSON**:

```powershell
npm run test:report
```

Os arquivos são gerados em:

```text
mochawesome-report/
├── relatorio-testes.html
└── relatorio-testes.json
```

Para abrir o relatório HTML no navegador pelo PowerShell:

```powershell
Start-Process .\mochawesome-report\relatorio-testes.html
```

O relatório permite consultar o resultado da execução, incluindo os testes aprovados, os testes com falha e os detalhes disponibilizados pelo Mochawesome.

## Documentação de referência

- [JavaScript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [npm](https://docs.npmjs.com/)

## Autoria

**Susane Nogueira**  
Exercício 5 | Lógica de Programação
