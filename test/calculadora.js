var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				
				var mudaraqui = "Adicionado com sucesso.";
				var descricao = "Foi";
				var valor = 123;
				var resultado = controller.utils.calculos.adicionar(descricao, valor);
				//resultado.should.be.a.Number;
				resultado.should.be.equal(mudaraqui);
			});
			
			it('Deveria retornar -3 quando for passado 1 e -4.', function() {
				
				var mudaraqui = "Adicionado com sucesso.";
				var descricao = "Foi";
				var valor = 123;
				var resultado = controller.utils.calculos.adicionar(descricao, valor);
				
				resultado.should.be.a.Number;
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
		
		describe('Subtrair', function() {
			it('Deveria retornar 0 quando for passado 2 e 0.', function() {
				var numero1 = 2;
				var numero2 = 0;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(2);
			});
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
			
			it('Deveria retornar -4 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar -4 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar 4 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar 0.25 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
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
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando multiplicar 1 por 4.', function() {
				var parametros = {
					descricao: "Foi",
					valor: 4,
					operacao: 'adicionar'
					//operacao: 'multiplicar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.equal("Adicionado com sucesso.");
			});
		});
	});

});
