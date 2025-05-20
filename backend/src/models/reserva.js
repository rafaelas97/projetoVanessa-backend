const connection = require('../database/connection');

const reserva = {
    getAll: (callback) => {
        connection.query('SELECT * FROM reserva', callback);
    },
    create: (data, callback) => {
        connection.query('INSERT INTO reserva SET ?', data, callback);
    },
    delete: (id, callback) => {
        connection.query('DELETE FROM reservas WHERE id = ?', [id], callback);
    }
};

module.exports = reserva;
