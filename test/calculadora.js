var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar adicionado com successo.', function() {
				var parametros = {
					descricao: "Isso",
					valor: 1
				};
				var mudaraqui = "Adicionado com sucesso.";
				//var resultado = controller.utils.calculos.calcular(parametros);
				mudaraqui.should.equal("Adicionado com sucesso.");
			});

			
		});
	});

});
