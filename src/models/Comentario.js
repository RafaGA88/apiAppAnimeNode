const { DataTypes, Model } = require('sequelize');

class Comentario extends Model {
  static init(sequelize) {
    super.init({
      review: {
        type: DataTypes.STRING,
        defaultValue: ' ',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Campo de nome não pode ficar em branco',
          },
          len: {
            args: [5, 255],
            msg: 'Comentário precisa ter no mínimo 5 caracteres',
          },
        },
      },
      rate: {
        type: DataTypes.INTEGER,
        defaultValue: ' ',
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Campo do Video não pode ficar em branco',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'comentario',
    });
  }

  static associate(models) {
    this.belongsTo(models.Anime, { foreignKey: 'anime_id' });
  }
}

module.exports = Comentario;
