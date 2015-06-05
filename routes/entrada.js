module.exports = function(app) {
	var controller = app.controllers.entradaController;
	
	app.get('/', controller.get.index);
	
	app.post('/salvar', controller.post.salvar);
	
	//app.post('/calcular', controller.post.calcular);
};
