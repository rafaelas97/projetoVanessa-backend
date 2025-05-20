const connection = require('../database/connection');

const feedback = {
    getAll: (callback) => {
        connection.query('SELECT * FROM feedback', callback);
    },
    create: (data, callback) => {
        connection.query('INSERT INTO feedback SET ?', data, callback);
    },
    delete: (id, callback) => {
        connection.query('DELETE FROM feedback WHERE id = ?', [id], callback);
    }
};

module.exports = feedback;
