const Parque = require('../models/parque');

exports.getParques = (req, res) => {
    Parque.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createParque = (req, res) => {
    Parque.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Parque cadastrado com sucesso!');
    });
};

exports.deleteParque = (req, res) => {
    const { id } = req.params;
    Parque.delete(id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Parque removido');
    });
};
