var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Enquete = require('../models').Enquete;

let sessoes = [];

/* Enviar formulário */

router.post('/enviar', function(req, res, next) {
	console.log('Enviando Enquete');
	
	Enquete.create({
        idadeUser : req.body.idadeUser,
        genero : req.body.genero,
        jogou : req.body.jogou,
        assistiu : req.body.assistiu,
        gostou : req.body.gostou,
        personagemFav : req.body.personagemFav,
        melhorJogo : req.body.melhorJogo
	}).then(resultado => {
		console.log(`Formulario enviado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;
