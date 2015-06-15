var usuarios = require('../controllers/usuarios.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar adicionado com successo.', function() {
				var parametros = {
					nome: "nome",
					login: "login",
					senha: "senha"
				};
				var req = 
				{
					body: parametros
				};
				var resposta = usuarios.update(req)
				resposta.mensagem.info.should.equal("Usuário cadastrado com sucesso!");
			});

			
		});
	});

});
