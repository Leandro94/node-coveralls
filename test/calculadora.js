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
			});
			
			it('Deveria retornar -3 quando for passado 1 e -4.', function() {
				
				var mudaraqui = "Adicionado com sucesso.";
				var descricao = "Foi";
				var valor = 123;
				var resultado = controller.utils.calculos.adicionar(descricao, valor);
				resultado.should.be.equal(mudaraqui);
			});
			
			it('Deveria retornar 3 quando for passado -1 e 4.', function() {
				
				var mudaraqui = "Adicionado com sucesso.";
				var descricao = "Foi";
				var valor = 123;
				var resultado = controller.utils.calculos.adicionar(descricao, valor);
				resultado.should.be.equal(mudaraqui);
			});
			
			it('Deveria retornar -5 quando for passado -1 e -4.', function() {
				
				var mudaraqui = "Adicionado com sucesso.";
				var descricao = "Foi";
				var valor = 123;
				var resultado = controller.utils.calculos.adicionar(descricao, valor);
				resultado.should.be.equal(mudaraqui);
			});
		});
	});
	
	describe('Testa se a função calcular funciona.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando somar 1 e 4.', function() {
				var parametros = {
					descricao: "Foi",
					valor: 4,
					operacao: 'adicionar'
				};
				var resultado = controller.utils.calculos.calcular(parametros);
				resultado.should.be.equal("Adicionado com sucesso.");
			});
		});
		
		describe('Subtrair', function() {
			
		});
	});

});
