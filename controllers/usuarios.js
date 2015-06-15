var moment = require('moment');

module.exports = function(app){

	var Usuario = app.models.usuarios;

	var UsuarioController = {
		index: function(req,res){
			Usuario.find(function(err, data){
				if (err){
					console.log(err);
				}
				res.render("usuarios/index", {lista: data, value: [{}], moment: moment});
			});
		},

		create: function(req,res){
			res.render("usuarios/create");
		},

		insert: function(req,res){
			var model = new Usuario(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}
				req.flash('info','Usuário cadastrado com sucesso!');
				res.redirect('/usuarios');
			});
		},

		edit: function(req,res){
			
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						res.render('usuarios/edit', {value: data});
				}
			});
			
		},

		update: function(req,res){
			if(typeof req.body._id == 'undefined')
			{
				var model = new Usuario(req.body);
				model.save(function(err){
					var mensagem = "Usuário cadastrado com sucesso!";
					if(err){
						console.log(err);
						mensagem = err;
					}
					req.flash('info',mensagem);
					res.redirect('/usuarios');
				});
			}
			else
			{
				Usuario.findById(req.body._id, function(err, data){
					if(err){
						console.log(err);
					}else{
							var model   = data;
							model.nome  = req.body.nome;
							model.login = req.body.login;
							model.senha = req.body.senha;
							model.save(function(err){
								if(err){
									console.log(err);
								}else{
									req.flash('info', 'Usuário atualizado com sucesso!');
								  res.redirect('/usuarios');
								}
							});
					}
				});
			}
		},

		show: function(req,res){
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
						res.render('usuarios/show', {value: data});
				}
			});
		},

		remove: function(req,res){
			Usuario.remove({_id: req.params.id}, function(err){
				if (err){
					console.log(err);
				}else{
					req.flash('info', 'Usuário excluído com sucesso!');
					res.redirect('/usuarios');
				}
			});
		}
	}

	return UsuarioController;
}