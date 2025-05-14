const express = require('express');
const router = express.Router();
const controller = require('../controllers/parqueController');

router.get('/parques', controller.getParques);
router.post('/parques', controller.createParque);
router.delete('/parques/:id', controller.deleteParque);


module.exports = router;