import { expect } from 'chai'
import {
    qtdPessoasVotantes,
    classificarFilme,
    mediaNotas,
    avaliarFilmes

} from '../source/avaliacaoFilme.js';

describe('Teste avaliação de filmes', function () {

    it('CT01 - Deve retornar 5 votos para um filme com 5 avaliações', function () {
        // Preparação
        const avaliacoes = [5, 4, 4, 4, 5];

        // Execução
        const resultado = qtdPessoasVotantes(avaliacoes);

        // Validação
        expect(resultado).to.equal(5);
    });

    it('CT02 - Deve retornar 0 quando o filme não possui avaliações', function () {
        const avaliacoes = [];

        const resultado = qtdPessoasVotantes(avaliacoes);

        expect(resultado).to.equal(0);
    });

    it('CT03 - Deve classificar como razoável a média 3.99', function () {
        const resultado = classificarFilme(3.99);
        expect(resultado).to.equal('Filme razoável');
    });

    it('CT04 - Deve classificar como ruim a média 2.99', function () {
        const resultado = classificarFilme(2.99);
        expect(resultado).to.equal('Filme ruim');
    });

    it('CT05 - Deve recomendar filme com média 4', function () {
        const resultado = classificarFilme(4);
        expect(resultado).to.equal('Filme recomendado');
    });

    it('CT06 - Deve classificar como razoável a média 3', function () {
        const resultado = classificarFilme(3);
        expect(resultado).to.equal('Filme razoável');
    });

    it('CT07 - Deve recomendar um filme com média 4.5', function () {
        const resultado = classificarFilme(4.5);

        expect(resultado).to.equal('Filme recomendado');
    });
    it('CT08 - Deve calcular corretamente a média das avaliações', function () {
    const avaliacoes = [5, 4, 4, 4, 5];

    const resultado = mediaNotas(avaliacoes);

    expect(resultado).to.equal(4.4);
});


});
