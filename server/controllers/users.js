const User = require("../models/user");
const FakerSeed = require("../helpers/fakerSeed");

module.exports = {
  index: async (req, res, next) => {
    try {
      const user = await User.findById(req.query.user._id);
      // const user = await User.findById(req.query.user._id).populate({
      //   path: "galleries",
      //   populate: {
      //     path: "images comments user",
      //     select: "-password",
      //     populate: {
      //       path: "user"
      //     }
      //   }
      // });
      // await console.log(user);
      const galleries = user.galleries;
      res.status(200).json(galleries);
    } catch (err) {
      next(err);
    }
  },
  getSeedUser: async (req, res, next) => {
    try {
      const user = await User.findOne({
        email: "seeddatabase@seed.com"
      }).populate({
        path: "galleries",
        populate: {
          path: "images comments user",
          select: "-password",
          populate: {
            path: "user"
          }
        }
      });
      const galleries = user.galleries;
      res.status(200).json(galleries);
    } catch (err) {
      next(err);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const user = await new User();
      const seedUser = await User.findOne({ email: "seeddatabase@seed.com" })
        .populate({
          path: "galleries",
          populate: {
            path: "images comments user",
            populate: {
              path: "user"
            }
          }
        })
        .select("-password");
      user.galleries = seedUser.galleries;
      await user.save();
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  },
  getUser: async (req, res, next) => {
    try {
      const user = await User.findById(req.body.user._id)
        .populate({
          path: "galleries",
          populate: {
            path: "images comments",
            populate: {
              path: "user"
            }
          }
        })
        .select("-password");
      await console.log(user);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  },
  seedDatabase: async (req, res, next) => {
    try {
      const galleries = await FakerSeed.seedUserGalleries();
      const seedUser = await User.findOne({ email: "seeddatabase@seed.com" });
      seedUser.galleries = galleries;
      await seedUser.save();
      await console.log(seedUser);
      res.status(200).json(seedUser);
    } catch (err) {
      next(err);
    }
  }
};
