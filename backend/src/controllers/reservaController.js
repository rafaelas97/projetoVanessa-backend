const connection = require('../database/connection');

exports.getReserva = (req, res) => {
  const query = 'SELECT * FROM reserva';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar reserva:', err.message);
      return res.status(500).json({ erro: 'Erro ao buscar reservas' });
    }
    res.status(200).json(results);
  });
};

exports.addReserva = (req, res) => {
  const { nome, parque, data_reserva, horario } = req.body;
  const query = 'INSERT INTO reserva (nome, email, data_reserva, parque_id) VALUES (?, ?, ?, ?)';

  connection.query(query, [nome, parque, data_reserva, horario], (err, result) => {
    if (err) {
      console.error('Erro ao inserir reserva:', err.message);
      return res.status(500).json({ erro: 'Erro ao inserir reserva' });
    }
    res.status(201).json({ id: result.insertId, nome, parque, data_reserva, horario });
  });
};

exports.deleteReserva = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM reserva WHERE id = ?';

  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar reserva:', err.message);
      return res.status(500).json({ erro: 'Erro ao deletar reserva' });
    }
    res.status(200).json({ mensagem: 'Reserva deletada com sucesso!' });
  });
};
