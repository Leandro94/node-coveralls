module.exports = function(app){
	var usuarios = app.controllers.usuarios;

	app.get('/', usuarios.index);
	app.get('/usuarios', usuarios.index);
	app.get('/usuarios/create', usuarios.create);
	app.post('/usuarios', usuarios.insert);
	app.post('/usuarios/edit/', usuarios.update);
	app.get('/usuarios/edit/:id', usuarios.edit);
	app.get('/usuarios/show/:id', usuarios.show);
	app.get('/usuarios/delete/:id', usuarios.remove);
}