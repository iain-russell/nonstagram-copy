const upload = require("../helpers/uploadHelper");

const Gallery = require("../models/gallery");
const User = require("../models/user");
const Image = require("../models/image");
const Comment = require("../models/comment");

const singleUpload = upload.single("image");
const multipleUpload = upload.array("image");

module.exports = {
  index: async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).populate("galleries");
      const galleries = user.galleries;
      res.status(200).json(galleries);
    } catch (err) {
      next(err);
    }
  },
  newGallery: async (req, res, next) => {
    try {
      const user = await User.findById(req.body.user);
      const newGallery = new Gallery({
        user: req.body.user,
        created_at: Date.now()
      });
      await newGallery.save();
      user.galleries.unshift(newGallery);
      await user.save();
      res.status(200).json(newGallery);
    } catch (err) {
      next(err);
    }
  },
  getGallery: async (req, res, next) => {
    try {
      console.log(req.params);
      const gallery = await Gallery.findById(req.params.galleryId);
      res.status(200).json(gallery);
    } catch (err) {
      next(err);
    }
  },
  deleteGallery: async (req, res, next) => {
    try {
      const gallery = await Gallery.findByIdAndDelete(req.params.galleryId);
      const userId = gallery.user;
      const user = await User.findById(userId);
      user.galleries.pull(gallery);
      await user.save();
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  },
  pullGallery: async (req, res, next) => {
    try {
      console.log(req.body);
      const gallery = await Gallery.findById(req.params.galleryId);
      const user = await User.findById(req.body.user);
      user.galleries.pull(gallery);
      await user.save();
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  },
  newGalleryImages: async (req, res, next) => {
    try {
      const gallery = await Gallery.findById(req.params.galleryId);
      multipleUpload(req, res, err => {
        const fileArray = req.files;
        const imageId = [];
        fileArray.forEach(file => {
          const newImage = new Image({
            gallery: gallery,
            key: file.transforms[0].key,
            name: file.originalname
          });
          // console.log(newImage);
          const image = newImage.save();
          gallery.images.push(newImage);
          imageId.push(newImage._id);
        });
        gallery.save();
        console.log(req.files);

        return res.json({ body: req.files, imageId: imageId });
      });
    } catch (err) {
      next(err);
    }
  },
  newComment: async (req, res, next) => {
    try {
      const user = await User.findById(req.body.user);
      const gallery = await Gallery.findById(req.params.galleryId);
      const commentFullData = await new Comment({
        content: req.body.content,
        gallery: gallery,
        user: user,
        created_at: Date.now()
      }).populate({
        path: "user",
        select: "-password"
      });
      await commentFullData.save();
      gallery.comments.push(commentFullData);
      user.comments.push(commentFullData);
      await gallery.save();
      await user.save();
      return res.status(200).json({ commentFullData });
    } catch (err) {
      next(err);
    }
  },
  deleteComment: async (req, res, next) => {
    try {
      const comment = await Comment.findByIdAndDelete(req.body.comment);
    } catch (err) {
      next(err);
    }
  },
  wipeUser: async (req, res, next) => {
    try {
      user = await User.findById(req.body.user._id);
      user.comments.forEach(async comment => {
        await Comment.findByIdAndDelete(comment);
      });
      await User.findByIdAndDelete(req.body.user._id);
      return res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  }
};
