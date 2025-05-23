const express = require('express');
const router = express.Router();
app.use(express.static(path.join(__dirname, "../../frontend")));

router.get('/home', (req, res) => res.send('Página Home'));
router.get('/sobre', (req, res) => res.send('Página Sobre'));
router.get('/cadastro', (req, res) => res.send('Página de Cadastro'));
router.get('/servicos', (req, res) => res.send('Página de Serviços'));

module.exports = router;