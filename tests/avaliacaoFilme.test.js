import { expect } from 'chai';

import {
    qtdPessoasVotantes,
    classificarFilme,
    mediaNotas,
    avaliarFilmes
} from '../source/avaliacaoFilme.js';


describe('Avaliação de filmes', function () {

   
    // Técnica: Análise de valor-limite
    // Objetivo: validar as transições entre as classificações.
    describe('Valores-limite da classificação', function () {

        it('CT01 - Deve classificar como ruim a média 2.99', function () {
            const resultado = classificarFilme(2.99);

            expect(resultado).to.equal('Filme ruim');
        });

        it('CT02 - Deve classificar como razoável a média 3', function () {
            const resultado = classificarFilme(3);

            expect(resultado).to.equal('Filme razoável');
        });

        it('CT03 - Deve classificar como razoável a média 3.99', function () {
            const resultado = classificarFilme(3.99);

            expect(resultado).to.equal('Filme razoável');
        });

        it('CT04 - Deve recomendar filme com média 4', function () {
            const resultado = classificarFilme(4);

            expect(resultado).to.equal('Filme recomendado');
        });

    });

    // Abordagem: Testes unitários
    // Objetivo: validar os cálculos independentemente.
    describe('Cálculo e quantidade de avaliações', function () {

        it('CT05 - Deve retornar zero votos para um filme sem avaliações', function () {
            // Preparação
            const avaliacoes = [];

            // Execução
            const resultado = qtdPessoasVotantes(avaliacoes);

            // Validação
            expect(resultado).to.equal(0);
        });

        it('CT06 - Deve calcular corretamente a média das avaliações', function () {
            // Preparação
            const avaliacoes = [5, 4, 4, 4, 5];

            // Execução
            const resultado = mediaNotas(avaliacoes);

            // Validação
            expect(resultado).to.equal(4.4);
        });

    });

    // Abordagem: Teste de integração entre funções
    // Objetivo: validar o resultado consolidado de cada filme.
    describe('Resultado consolidado dos filmes', function () {

        it('CT07 - Deve retornar a avaliação completa do filme Saneamento Básico - razoável', function () {
            // Preparação
            const filmes = [
                {
                    nome: 'Saneamento Básico',
                    avaliacoes: [3, 4, 2, 3, 4]
                }
            ];

            // Execução
            const resultado = avaliarFilmes(filmes);

            // Validação
            expect(resultado[0].nome).to.equal('Saneamento Básico');
            expect(resultado[0].quantidadeVotos).to.equal(5);
            expect(resultado[0].media).to.equal(3.2);
            expect(resultado[0].classificacao).to.equal('Filme razoável');
        });

        it('CT08 - Deve retornar a avaliação completa do filme Se eu fosse você - ruim', function () {
            // Preparação
            const filmes = [
                {
                    nome: 'Se eu fosse você',
                    avaliacoes: [1, 2, 3]
                }
            ];

            // Execução
            const resultado = avaliarFilmes(filmes);

            // Validação
            expect(resultado[0].nome).to.equal('Se eu fosse você');
            expect(resultado[0].quantidadeVotos).to.equal(3);
            expect(resultado[0].media).to.equal(2);
            expect(resultado[0].classificacao).to.equal('Filme ruim');
        });

        it('CT09 - Deve retornar a avaliação completa do filme Minha mãe é uma peça - recomendado', function () {
            // Preparação
            const filmes = [
                {
                    nome: 'Minha mãe é uma peça',
                    avaliacoes: [5, 4, 4, 4, 5]
                }
            ];

            // Execução
            const resultado = avaliarFilmes(filmes);

            // Validação
            expect(resultado[0].nome).to.equal('Minha mãe é uma peça');
            expect(resultado[0].quantidadeVotos).to.equal(5);
            expect(resultado[0].media).to.equal(4.4);
            expect(resultado[0].classificacao).to.equal('Filme recomendado');
        });

    });

});