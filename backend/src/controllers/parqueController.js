const db = require('../database/connection');

exports.getParques = (req, res) => {
  const query = 'SELECT * FROM parques';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar parques:', err.message);
      return res.status(500).json({ erro: 'Erro ao buscar parques' });
    }
    res.status(200).json(results);
  });
};

exports.createParque = (req, res) => {
  const { nome, localizacao, capacidade } = req.body;
  const query = 'INSERT INTO parques (nome, localizacao, capacidade) VALUES (?, ?, ?)';
  db.query(query, [nome, localizacao, capacidade], (err, result) => {
    if (err) {
      console.error('Erro ao inserir parque:', err.message);
      return res.status(500).json({ erro: 'Erro ao inserir parque' });
    }
    res.status(201).json({ id: result.insertId, nome, localizacao, capacidade });
  });
};

exports.deleteParque = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM parques WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar parque:', err.message);
      return res.status(500).json({ erro: 'Erro ao deletar parque' });
    }
    res.status(200).json({ mensagem: 'Parque deletado com sucesso!' });
  });
};


