const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/reservas', reservaController.getReserva);
router.post('/reservas', reservaController.addReserva);
router.delete('/reservas/:id', reservaController.deleteReserva);

module.exports = router;