const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.get('/feedback', feedbackController.getFeedback);
router.post('/feedback', feedbackController.addFeedback);
router.delete('/feedback/:id', feedbackController.deleteFeedback);

module.exports = router;