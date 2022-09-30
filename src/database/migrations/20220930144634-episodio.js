/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('episodio', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      anime_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'animes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      video: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero_episodio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('episodio');
  },
};
