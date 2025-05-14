const db = require('../database/connection');

const Parque = {
    getAll: (callback) => {
        db.query('SELECT * FROM parques', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO parques SET ? ', data, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM parques WHERE id = ?', [id], callback);
    }
};

module.exports = Parque; 