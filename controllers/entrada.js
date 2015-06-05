module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};
				
				resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;
				
				return resposta;
			},
			
			entradas: {
				salvar: function(parametros) {
					var numero1 = parseFloat(parametros.numero1);
					var numero2 = parseFloat(parametros.numero2);
					
					var resultado = Controller.utils.calculos[parametros.operacao](numero1, numero2);
					
					return resultado;
				}
			},
			
			//validaParametro: function(parametro) {
			//	if(parametro && parametro !== '') {
			//		return parseFloat(parametro);
			//	}
				
			//	return 0.0;
			//},
			
			extrairParametros: function(body) {
				var parametros = {
					descricao: body.descricao,
					valor: body.valor,
					dataEntrada: body.dataEntrada,
					
				};
				
				//parametros.numero1 = Controller.utils.validaParametro(body.numero1);
				//parametros.numero2 = Controller.utils.validaParametro(body.numero2);
				
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},
			
			formulario: function(request, response) {
				response.render('formulario');
			}
		},
		
		post: {
			salvar: function(request, response) {
				var parametros = Controller.utils.extrairParametros(request.body);
				var resultado  = Controller.utils.entradas.salvar(parametros);
				var resposta   = Controller.utils.formatarResposta(resultado);
				
				response.render(parametros.operacao, resposta);
			}
		}
	};
	
	return Controller;
};
