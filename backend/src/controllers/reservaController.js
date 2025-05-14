const db = require('../database/connection');

exports.getReserva = (req, res) => {
  const query = 'SELECT * FROM reserva';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar reserva:', err.message);
      return res.status(500).json({ erro: 'Erro ao buscar reservas' });
    }
    res.status(200).json(results);
  });
};

exports.addReserva = (req, res) => {
  const { nome, email, data_reserva, parque_id } = req.body;
  const query = 'INSERT INTO reserva (nome, email, data_reserva, parque_id) VALUES (?, ?, ?, ?)';

  db.query(query, [nome, email, data_reserva, parque_id], (err, result) => {
    if (err) {
      console.error('Erro ao inserir reserva:', err.message);
      return res.status(500).json({ erro: 'Erro ao inserir reserva' });
    }
    res.status(201).json({ id: result.insertId, nome, email, data_reserva, parque_id });
  });
};
