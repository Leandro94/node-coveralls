module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
//				var accounting = require('accounting');
//				var resposta   = {
//					resultado: 0.0
//				};
//				
//				resultado = accounting.formatNumber(resultado, 2, ".", ",");
//				resposta.resultado = resultado;
				
//				return resposta;
				return resultado;
			},
			
			calculos: {
				calcular: function(parametros) {
					var descricao = parametros.descricao;
					var valor = parametros.valor;
					
					var resultado = Controller.utils.calculos["adicionar"](descricao, valor);
					
					return resultado;
				},
				
				adicionar: function(descricao, valor) {
					return "Adicionado com sucesso.";
				},
				
				subtrair: function(numero1, numero2) {
					return numero1 - numero2;
				},
				
				multiplicar: function(numero1, numero2) {
					return numero1 * numero2;
				},
				
				dividir: function(numero1, numero2) {
					return numero1 / numero2;
				}
			},
			
			validaParametro: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}
				
				return 0.0;
			},
			
			extrairParametros: function(body) {
				var parametros = {
					descricao: body.descricao,
					valor: body.valor
				};
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},
			
			adicionar: function(request, response) {
				response.render('adicionar');
			},
			
			subtrair: function(request, response) {
				response.render('subtrair');
			},
			
			multiplicar: function(request, response) {
				response.render('multiplicar');
			},
			
			dividir: function(request, response) {
				response.render('dividir');
			}
		},
		
		post: {
			calcular: function(request, response) {
				var parametros = Controller.utils.extrairParametros(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametros);
				var resposta   = Controller.utils.formatarResposta(resultado);
				
				response.render("adicionar"/*parametros.operacao*/, resposta);
			}
		}
	};
	
	return Controller;
};
