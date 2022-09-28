import { DataType, Model } from 'sequelize';

export default class Anime extends Model {
  static init(sequelize) {
    super.init({
      titulo: DataType.STRING,
      categoria: DataType.STRING,
      descricao: DataType.TEXT,
      data_lancamento: DataType.DATEONLY,
    }, {
      sequelize,
    });
    return this;
  }
}
