const faker = require("faker");
const User = require("../models/user");
const Gallery = require("../models/gallery");
const Image = require("../models/image");
const Comment = require("../models/comment");

module.exports = {
  getRandomInt() {
    return Math.floor(Math.random() * 5 + 2);
  },
  seedUser() {
    const user = new User({
      email: faker.internet.email(),
      password: faker.internet.password(),
      isHuman: false,
      created_at: Date.now()
    });
    return user;
  },
  seedComment() {
    const comment = new Comment({
      content: faker.lorem.sentence(),
      created_at: Date.now()
    });
    return comment;
  },
  async seedUserGalleries() {
    const user = new User({ email: "seeddatabase@seed.com", isHuman: false });
    const images = this.seedImages();
    const galleries = [];
    images.forEach(async item => {
      const gallery = new Gallery({
        created_at: Date.now(),
        user: user
      });
      gallery.comments = this.seedComments();
      gallery.images.push(item);
      await item.save();
      await gallery.save();
      galleries.push(gallery);
    });
    await user.save();
    return galleries;
  },
  seedComments() {
    const comments = [];
    for (var i = 0; i < this.getRandomInt(); i++) {
      const user = this.seedUser();
      const comment = this.seedComment();
      comment.user = user;
      user.save();
      comment.save();
      comments.push(comment);
    }
    return comments;
  },
  seedImages() {
    const imageData = [
      {
        key: "image-gallery-site/1557001684191",
        name: "david-schultz-1475807-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001683923",
        name: "mohammad-aqhib-1480511-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001685052",
        name: "samuel-zeller-103103-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001684950",
        name: "haiqal-osman-1394800-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001683914",
        name: "ioana-farcas-33320-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001685787",
        name: "missmushroom-1201587-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001685597",
        name: "loreta-pavoliene-2173-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001684190",
        name: "ganapathy-kumar-1137539-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001686578",
        name: "zhu-hongzhi-1249096-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001685147",
        name: "leonard-von-bibra-1506324-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001683922",
        name: "raul-taciu-203116-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001686747",
        name: "michael-kooiman-1134654-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001686625",
        name: "annie-spratt-1288465-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001688299",
        name: "bruce-warrington-1431472-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001689051",
        name: "guillaume-baudusseau-433743-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001688351",
        name: "ellena-mcguinness-1455796-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001690365",
        name: "wes-grant-312612-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001689440",
        name: "dmitry-sovyak-454058-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001687066",
        name: "matthias-jordan-367209-unsplash.jpg"
      },
      {
        key: "image-gallery-site/1557001688544",
        name: "osama-saeed-1334736-unsplash.jpg"
      }
    ];
    const imageArray = [];
    imageData.forEach(item => {
      const image = new Image({
        key: item.key,
        name: item.name,
        created_at: Date.now()
      });
      imageArray.push(image);
    });
    return imageArray;
  }
};
