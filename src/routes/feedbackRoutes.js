const express = require('express');
const router = express.Router();
const controller = require('../controllers/feedbackController');

router.get('/', controller.getFeedback);
router.post('/', controller.createFeedback);
router.delete('/:id', controller.deleteFeedback);

module.exports = router;