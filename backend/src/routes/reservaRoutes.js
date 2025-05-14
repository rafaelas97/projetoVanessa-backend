const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/reservas', reservaController.getReserva);
router.post('/reservas', reservaController.createReserva);
router.delete('/:id', controller.deleteReserva);

module.exports = router;