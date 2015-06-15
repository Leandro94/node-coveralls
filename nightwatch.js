module.exports = {
	"demonstração": function(client) {
		client
			.url("http://localhost:3000/")
			.setValue("#descricao", "nightwatch descricao")
			.setValue("#valor", "1234567890")
			.click("#buscar")
			.pause(3000)
			.assert.valueContains("#tabela tr", "Muita 2")
			.end();
	}
};