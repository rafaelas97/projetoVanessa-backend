const connection = require('../database/connection');

exports.getFeedback = (req, res) => {
  const query = 'SELECT * FROM feedback';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar feedback:', err.message);
      return res.status(500).json({ erro: 'Erro ao buscar feedback' });
    }
    res.status(200).json(results);
  });
};

exports.addFeedback = (req, res) => {
  const { nome, email, mensagem } = req.body;
  const query = 'INSERT INTO feedback (nome, email, mensagem) VALUES (?, ?, ?)';

  connection.query(query, [nome, email, mensagem], (err, result) => {
    if (err) {
      console.error('Erro ao inserir feedback:', err.message);
      return res.status(500).json({ erro: 'Erro ao inserir feedback' });
    }
    res.status(201).json({ id: result.insertId, nome, email, mensagem });
  });
};
