module.exports = function(app) {
	var controller = app.controllers.calculadora;
	
	app.get('/', controller.get.index);
	app.post('/calcular', controller.post.calcular);
	
};
