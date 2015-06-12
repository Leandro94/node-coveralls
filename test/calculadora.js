var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				var parametros = {
					descricao: "Isso",
					valor: 1
				};
				var mudaraqui = "Adiocionado com sucesso;"

				var resultado = controller.utils.calculos.calcular(parametros);
				(mudaraqui == resultado).should.be.true;
			});

			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				var resultado = "a";
				var resposta = controller.utils.formatarResposta(resultado);
				(resposta.resultado == resultado).should.be.true;
			});
			
		});
	});

});
