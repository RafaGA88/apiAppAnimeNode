const { DataTypes, Model } = require('sequelize');

class Anime extends Model {
  static init(sequelize) {
    super.init({
      titulo: {
        type: DataTypes.STRING,
        defaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Campo titulo não pode ficar vazio',
          },
        },
      },
      categoria: {
        type: DataTypes.STRING,
        defaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Campo categoria não pode ficar vazio',
          },
        },
      },
      descricao: {
        type: DataTypes.TEXT,
        defaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Campo descrição não pode ficar vazio',
          },
        },
      },
      data_lancamento: {
        type: DataTypes.DATEONLY,
        defaultValue: ' ',
        validate: {
          notEmpty: {
            msg: 'Campo data de lançamento não pode ficar vazio',
          },
        },
      },
    }, {
      sequelize,
    });
  }
}

module.exports = Anime;
