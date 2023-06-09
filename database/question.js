const { Sequelize } = require('sequelize');
const connection = require('./database');

const Question = connection.define('question', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({force: false}).then(() => {}); // O force não irá forçar a criação da tabela caso ela já exista

module.exports = Question;