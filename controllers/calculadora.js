module.exports = function(app)
{

	var Controller = {

		formatarResposta: function(resultado) {
			//var accounting = require('accounting');
			var resposta   = {
				resultado: 0.0
			};
			//resultado = accounting.formatNumber(resultado, 2, ".", ",");
			resposta.resultado = resultado;
			
			return resposta;
		},

	}
	return Controller;
};