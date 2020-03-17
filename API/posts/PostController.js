const express = require ('express');
const router = express.Router();
const Post = require('./PostModel');




// create new post
exports.create = function (req, res, next) {
    console.log('Attempting to create new post');
    var post = new Post({
        title: req.body.title,
        languages: req.body.languages,
        originalText: req.body.originalText,
        userID: req.body.userID,
        dateCreated: req.body.dateCreated ? Date.parse(req.body.dateCreated) : Date.now(),
        upvotes: req.body.upvotes,                             // are we going to make the poster auto upvote their post?
        downvotes: req.body.downvotes,
        tags: req.body.tags,                                   // tags might be not required
        // on creation will not have comments, flags

        // it might be easier to just create a post with no translation then have the user
        // to add translation once the post is created.
        translations: req.body.translations 

    });
    
    console.log("get called");
    post.save(function (err) {
        if (err)
            res.json(err);
        res.json({
                    message: 'New post created!',
                    data: post
                });
    });

    /* this might also work isntead of the code above
    console.log('Attempting to create new post')
    Post.create(req.body).then(function(post){
        res.send(post)
    }).catch(next);
    */

};

// get one post, this sends the entire post so it might needs to be changed
exports.view = function (req,res,next) {
    Post.findOne({_id: req.param._id}).then(function(post){ // find the post
        res.send(post)                                      // return the post, TODO: need to know format on return
    }).catch(next);                                         // catch error
};