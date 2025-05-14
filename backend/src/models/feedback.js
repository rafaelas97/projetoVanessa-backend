const db = require('../database/connection');

const Feedback = {
    getAll: (callback) => {
        db.query('SELECT * FROM feedbacks', callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO feedbacks SET ?', data, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM feedbacks WHERE id = ?', [id], callback);
    }
};

module.exports = Feedback;
