const express = require('express');
const router = express.Router();
const parqueController = require('../controllers/parqueController');

router.get('/parques', parqueController.getParques);
router.post('/parques', parqueController.createParque);
router.delete('/parques/:id', parqueController.deleteParque); 

module.exports = router;
