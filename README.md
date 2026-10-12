# Avaliação de Filmes | Exercício 5

Projeto desenvolvido como parte da aula de **Lógica de Programação**, utilizando JavaScript para implementar regras de avaliação de filmes e Mocha e Chai para validar os resultados por meio de testes automatizados.

**Autora:** Susane Nogueira  
**Repositório:** https://github.com/susanenogueira/avaliacao-filmes

## Objetivo

Implementar uma solução que receba uma lista de filmes e suas respectivas avaliações, retornando para cada filme:

- Nome do filme;
- Quantidade de votos recebidos;
- Média das avaliações;
- Classificação conforme a média calculada.

As regras de classificação são:

| Média | Classificação |
|---|---|
| Maior ou igual a 4 | Filme recomendado |
| Maior ou igual a 3 e menor que 4 | Filme razoável |
| Menor que 3 | Filme ruim |

O projeto também contempla testes automatizados e geração de relatórios de execução.

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| JavaScript | Implementação das regras de negócio |
| Node.js | Ambiente de execução |
| Mocha | Organização e execução dos testes |
| Chai | Validação dos resultados com asserções |
| Mochawesome | Geração de relatórios HTML e JSON |
| npm | Gerenciamento de dependências e comandos |

## Estrutura do repositório

```text
avaliacao-filmes/
├── source/
│   └── avaliacaoFilme.js
├── tests/
│   └── avaliacaoFilme.test.js
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

- **source/**: contém a implementação das funções de avaliação.
- **tests/**: contém os testes automatizados.
- **package.json**: define dependências e comandos de execução.
- **.gitignore**: impede o versionamento de arquivos gerados e dependências locais.

O diretório `mochawesome-report/` é criado durante a geração dos relatórios.

## Estratégia de testes

Foram implementados **9 casos de teste**, organizados por comportamento e finalidade da validação.

A estratégia combina testes unitários, análise de valor-limite e verificação do resultado consolidado das funções.

| Grupo | Casos | Objetivo |
|---|---|---|
| Valores-limite da classificação | CT01–CT04 | Verificar as transições entre as classificações |
| Cálculo e quantidade de avaliações | CT05–CT06 | Validar a contagem de votos e o cálculo da média |
| Resultado consolidado dos filmes | CT07–CT09 | Verificar nome, quantidade de votos, média e classificação |

### Análise de valor-limite

Os testes verificam os valores próximos às transições entre as categorias:

- **2,99:** filme ruim;
- **3:** filme razoável;
- **3,99:** filme razoável;
- **4:** filme recomendado.

Essa abordagem busca identificar falhas nas condições que determinam a classificação.

### Testes unitários

As funções de contagem de votos e cálculo da média são verificadas individualmente, permitindo identificar falhas em comportamentos específicos.

### Resultado consolidado

Os testes também verificam o resultado produzido pela função `avaliarFilmes()`, que combina contagem, cálculo da média e classificação.

São contemplados os três filmes fornecidos no exercício, representando as categorias **razoável, ruim e recomendado**.

### Cenário sem avaliações

O projeto contempla um teste para verificar que uma lista vazia de avaliações retorna **zero votos**.

A classificação de filmes sem avaliações não é validada como regra de negócio, pois esse comportamento não foi definido no exercício.

## Pré-requisitos

- Node.js e npm instalados;
- Git, caso deseje clonar o repositório.

## Instalação

No PowerShell, execute:

```powershell
git clone https://github.com/susanenogueira/avaliacao-filmes.git
cd avaliacao-filmes
npm install
```

## Execução dos testes

Para executar os testes no terminal:

```powershell
npm test
```

## Geração e visualização do relatório

Para executar os testes e gerar relatórios em HTML e JSON:

```powershell
npm run test:report
```

Os arquivos serão gerados em:

```text
mochawesome-report/
├── relatorio-testes.html
└── relatorio-testes.json
```

Para abrir o relatório HTML no navegador pelo PowerShell:

```powershell
Start-Process .\mochawesome-report\relatorio-testes.html
```

O relatório permite consultar os testes aprovados, os testes com falha e os detalhes da execução, organizados por grupo.

## Documentação de referência

- [JavaScript — MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [npm](https://docs.npmjs.com/)

## Autoria

**Susane Nogueira**  
Exercício 5 | Lógica de Programação