const express = require('express');
const router = express.Router();
const controller = require('../controllers/reservaController');

router.get('/', controller.getReserva);
router.post('/', controller.createReserva);
router.delete('/:id', controller.deleteReserva);

module.exports = router;