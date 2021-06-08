var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Comentario = require('../models').Comentario;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/comentar/:idUsuario', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idUsuario = req.params.idUsuario;

    Comentario.create({
        // titulo: req.body.titulo,
        descricao: req.body.descricao,
        fkUsuario: idUsuario
    }).then(resultado => {
        console.log("Post realizado com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/', function(req, res, next) {
	console.log('Recuperando todas os comentarios');
	
    let instrucaoSql = `SELECT 
    usuario.nomeUsuario,
    descricao
    FROM comentario
    INNER JOIN usuario
    ON Comentario.fkUsuario = Usuario.idUsuario
    ORDER BY comentario.id DESC`;

	sequelize.query(instrucaoSql, {
		model: Comentario,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
router.get('/:idUsuario', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
	var idUsuario = req.params.idUsuario;

    let instrucaoSql = `SELECT 
    usuario.nomeUsuario,
    descricao
    FROM comentario
    INNER JOIN usuario
    ON Comentario.fkUsuario = Usuario.idUsuario
    WHERE fkUsuario = ${idUsuario}
    ORDER BY comentario.id DESC`;

	sequelize.query(instrucaoSql, {
		model: Comentario,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
