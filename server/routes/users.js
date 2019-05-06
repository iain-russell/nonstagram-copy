const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");
const GalleriesController = require("../controllers/galleries");

router.route("/").get(UsersController.index);

router.route("/userInfo").post(UsersController.getUser);

router.route("/getSeedUser").get(UsersController.getSeedUser);

router.route("/createUser").post(UsersController.createUser);

router.route("/seedUser").post(UsersController.seedDatabase);

router.route("/newGallery").post(GalleriesController.newGallery);

router
  .route("/:galleryId")
  .get(GalleriesController.getGallery)
  .delete(GalleriesController.deleteGallery);

router.route("/:galleryId/pull").post(GalleriesController.pullGallery);

router
  .route("/:galleryId/upload-images")
  .post(GalleriesController.newGalleryImages);

router
  .route("/:galleryId/comments")
  .post(GalleriesController.newComment)
  .delete(GalleriesController.deleteComment);

router.route("/wipeUser").post(GalleriesController.wipeUser);

module.exports = router;
