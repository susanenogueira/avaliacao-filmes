const listaFilmes = [
    {
        nome: 'Minha mãe é uma peça',
        avaliacoes: [5, 4, 4, 4, 5]
    },

    {
        nome: 'Saneamento Básico',
        avaliacoes: [3, 4, 2, 3, 4]
    },

    {
        nome: 'Se eu fosse você',
        avaliacoes: [1, 2, 3]
    }
]



export function mediaNotas(avaliacoes) {
    let somaNotas = 0;

    for (let i = 0; i < avaliacoes.length; i++) {
        somaNotas += avaliacoes[i];
    }

    const media = somaNotas / avaliacoes.length;

    return media;
}

export function qtdPessoasVotantes(avaliacoes) {
    return avaliacoes.length;
}

export function classificarFilme(media) {
    if (media >= 4) {
        return "Filme recomendado";
    } else if (media >= 3) {
        return "Filme razoável";
    } else {
        return "Filme ruim";
    }
}

export function avaliarFilmes(listaFilmes) {
    const resultados = [];

    for (let i = 0; i < listaFilmes.length; i++) {
        const filme = listaFilmes[i];

        const quantidade = qtdPessoasVotantes(filme.avaliacoes);
        const media = mediaNotas(filme.avaliacoes);
        const classificacao = classificarFilme(media);

        resultados.push({
            nome: filme.nome,
            quantidadeVotos: quantidade,
            media: media,
            classificacao: classificacao
        });
    }

    return resultados;
}

console.log(avaliarFilmes(listaFilmes));