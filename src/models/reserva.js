const db = require('../database/connection');

const Reserva = {
    getAll: (callback) => {
        db.query('SELECT * FROM reservas', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO reservas SET ?', data, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM reservas WHERE id = ?', [id], callback);
    }
};

module.exports = Reserva;
