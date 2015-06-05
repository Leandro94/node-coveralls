module.exports = function(app) {
	var controller = app.controllers.calculadora;
	
	app.get('/', controller.get.index);
	app.get('/adicionar', controller.get.adicionar);
	app.get('/subtrair', controller.get.subtrair);
	app.get('/multiplicar', controller.get.multiplicar);
	app.get('/dividir', controller.get.dividir);
	app.post('/calcular', controller.post.calcular);
	
	var entrada = app.controllers.entrada;
	app.get('/entrada/', entrada.get.index);
	app.get('/entrada/index', entrada.get.index);
	app.post('/salvar', entrada.post.salvar);
};
