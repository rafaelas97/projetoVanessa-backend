const Reserva = require('../models/reserva');

exports.getReserva = (req, res) => {
    Reserva.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createReserva = (req, res) => {
    Reserva.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Reserva criada com sucesso!');
    });
};

exports.deleteReserva = (req, res) => {
    const id = req.params.id;
    Reserva.delete(id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Reserva removida com sucesso.');
    });
};
