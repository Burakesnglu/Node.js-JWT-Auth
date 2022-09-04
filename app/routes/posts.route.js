const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/')
      .get(controller.postController.getAllPosts);

router.route('/:id')
      .get(controller.postController.getPost);
      
module.exports = router;