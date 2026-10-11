import { expect } from 'chai'
import {
    qtdPessoasVotantes,
    mediaNotas,
    classificarFilme,
    avaliarFilmes
} from '../source/avaliacaoFilme.js';

describe('Teste avaliação de filmes', function () {

    it('Deve retornar 5 votos para um filme com 5 avaliações', function () {
        // Preparação
        const avaliacoes = [5, 4, 4, 4, 5];

        // Execução
        const resultado = qtdPessoasVotantes(avaliacoes);

        // Validação
        expect(resultado).to.equal(5);
    });

});
