const connection = require('../database/connection');

const Parque = {
    getAll: (callback) => {
        connection.query('SELECT * FROM parques', callback);
    },
    create: (data, callback) => {
        connection.query('INSERT INTO parques SET ? ', data, callback);
    },
    delete: (id, callback) => {
        connection.query('DELETE FROM parques WHERE id = ?', [id], callback);
    }
};

module.exports = Parque; 