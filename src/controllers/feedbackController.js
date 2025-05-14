const Feedback = require('../models/feedback');

exports.getFeedbacks = (req, res) => {
    Feedback.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createFeedback = (req, res) => {
    Feedback.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Feedback enviado com sucesso!');
    });
};

exports.deleteFeedback = (req, res) => {
    const id = req.params.id;
    Feedback.delete(id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Feedback removido com sucesso.');
    });
};
