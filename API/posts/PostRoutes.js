let router = require('express').Router();
let postController = require('./PostController');

// I think postController can be broken down but I'm a lazy fuck

// create post
router.route('/').post(postController.create);
// get one post
router.route('/:post_id').get(postController.view);
// add translation to post
router.route('/:post_id/translations/').post(postController.addTranslation);


//Comments
router.route('/:post_id/comments').post(postController.commentOnPost);
router.route('/:post_id/translations/:translation_id/comments/').post(postController.commentOnTranslation);

//Votes
router.route('/:post_id/vote').put(postController.votePost);    // vote on post
router.route('/:post_id/translations/:translation_id/vote').put(postController.voteTranslation); // vote on translation
router.route('/:post_id/comments/:comment_id/vote').put(postController.votePostComment);

module.exports = router;