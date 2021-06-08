'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Enquete = sequelize.define('Enquete',{
		id: {
			field: 'idEnquete',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		idadeUser: {
			field: 'idadeUser',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		genero: {
			field: 'genero',
			type: DataTypes.STRING,
			allowNull: false
		},
		jogou: {
			field: 'jogou',
			type: DataTypes.STRING,
			allowNull: false
		},
        assistiu: {
			field: 'assistiu',
			type: DataTypes.STRING,
			allowNull: false
		},
        gostou: {
			field: 'gostou',
			type: DataTypes.STRING,
			allowNull: false
		},
        personagemFav: {
			field: 'personagemFav',
			type: DataTypes.STRING,
			allowNull: false
		},
        melhorJogo: {
			field: 'melhorJogo',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Enquete', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Enquete;
};
