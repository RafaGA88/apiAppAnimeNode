const { DataTypes, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: ' ',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: ' ',
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: ' ',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: ' ',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

module.exports = User;
