module.exports = function(app) {
	var controller = app.controllers.entradaController;
	
	app.get('/', controller.get.index);
	app.get('/adicionar', controller.get.adicionar);
	
	//app.post('/calcular', controller.post.calcular);
};
