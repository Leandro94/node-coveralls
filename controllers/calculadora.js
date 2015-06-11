module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				//var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};
				//resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;
				
				return resposta;
			},
			formatarRespostaLista: function(resultado) {
				//var accounting = require('accounting');
				var resposta   = {
					resultado: 0.0
				};
				//resultado = accounting.formatNumber(resultado, 2, ".", ",");
				resposta.resultado = resultado;
				
				return resposta;
			},
			
			calculos: {
				calcular: function(parametros) {
					var erro = Controller.utils.validaParametro(parametros);
					if(erro == "")
					{
						var descricao = parametros.descricao;
						var valor = parametros.valor;
						
						var resultado = Controller.utils.calculos["adicionar"](descricao, valor);
						
						return resultado;
					}
					return erro;
				},
				
				adicionar: function(descricao, valor) {
					var MongoClient = require('mongodb').MongoClient
					    , format = require('util').format;
					MongoClient.connect('mongodb://petrovick:123@ds043002.mongolab.com:43002/nodepivii', function(err, db) {
					    if(err) throw err;

					    var collection = db.collection('nodepivii');
					    collection.insert({descricao:descricao, valor:valor}, function(err, docs) {
					        //collection.count(function(err, count) {
					        //    console.log(format("count = %s", count));
					        //    db.close();
					        //});
					    });
						return "Adicionado com sucesso.";
					});
					//return "Adicionado com sucesso.";
				},
				
				todos: function(query, where, callback) {
					var MongoClient = require('mongodb').MongoClient
					    , format = require('util').format;
					MongoClient.connect('mongodb://petrovick:123@ds043002.mongolab.com:43002/nodepivii', function(err, db) {
					    //if(err) throw err;

					    var collection = db.collection('nodepivii');

					    collection.find({}, function(e, r)
					    	{
					    		callback(e, r);
					    	});

					});
				},
				
				multiplicar: function(numero1, numero2) {
					return numero1 * numero2;
				},
				
				dividir: function(numero1, numero2) {
					return numero1 / numero2;
				}
			},
			
			validaParametro: function(parametros) {
				var descricao = parametros.descricao;

				var valor = parametros.valor;
				if(descricao == "")
					return "Descricao não pode ser vazio.";
				var descricaoMaiusculo = descricao.toUpperCase();
				if(descricao.charAt(0) != descricaoMaiusculo.charAt(0))
					return "Primeira letra deve ser maiúscula";
				if(valor == 0)
					return "Valor não pode ser 0";
				if(valor < 0)
					return "Valor não pode ser negativo";
			},
			
			extrairParametros: function(body) {
				var parametros = {
					descricao: body.descricao,
					valor: body.valor,
					operacao: body.operacao
				};
				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				var parametros = Controller.utils.extrairParametros(request.body);

				var MongoClient = require('mongodb').MongoClient
				    , format = require('util').format;
				MongoClient.connect('mongodb://petrovick:123@ds043002.mongolab.com:43002/nodepivii', function(err, db) {
				    //if(err) throw err;

				    var collection = db.collection('nodepivii');

				    collection.find().toArray(function(e, r)
				    	{
				    		var resposta = Controller.utils.formatarRespostaLista(r);
				    		response.render("index", resposta);
				    	});

				});

				//Controller.utils.calculos.todos();
				//var resposta   = Controller.utils.formatarResposta(resultado);
				
				
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
				
				var MongoClient = require('mongodb').MongoClient
				    , format = require('util').format;
				MongoClient.connect('mongodb://petrovick:123@ds043002.mongolab.com:43002/nodepivii', function(err, db) {
				    //if(err) throw err;

				    var collection = db.collection('nodepivii');

				    collection.find().toArray(function(e, r)
				    	{
				    		var resposta = Controller.utils.formatarRespostaLista(r);
				    		response.render("index", resposta);
				    	});

				});
			}
		}
	};
	
	return Controller;
};