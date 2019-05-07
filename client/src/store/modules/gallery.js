import axios from "axios";
import { router } from "../../main.js";
const state = {
  gallery: "",
  galleries: [],
  counter: 0,
  user: "",
  seedUser: [
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb323",
          key: "image-gallery-site/1557001686578",
          name: "zhu-hongzhi-1249096-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.997Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb377",
          content: "Esse voluptates eveniet quaerat.",
          created_at: "2019-05-06T20:06:27.022Z",
          user: {
            email: "susie_sanford@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb376",
            password: "KJ3jYeSFN_Z0204",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb379",
          content: "Nihil eos amet molestias labore.",
          created_at: "2019-05-06T20:06:27.022Z",
          user: {
            email: "hilario_gibson35@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb378",
            password: "qQ7kRhOA7esvmG1",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb37b",
          content: "Aliquam nesciunt adipisci id.",
          created_at: "2019-05-06T20:06:27.023Z",
          user: {
            email: "edwardo_beatty@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb37a",
            password: "83shnNEh66VWSr1",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb37d",
          content: "Odio voluptatibus nisi non.",
          created_at: "2019-05-06T20:06:27.023Z",
          user: {
            email: "madelynn_pfannerstill@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb37c",
            password: "iU0Xv00mvo2CTj5",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb37f",
          content: "Sunt quo rem quia ea eos.",
          created_at: "2019-05-06T20:06:27.024Z",
          user: {
            email: "kirk.douglas47@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb37e",
            password: "I34XYuskspXEqOZ",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb375",
      created_at: "2019-05-06T20:06:27.022Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb321",
          key: "image-gallery-site/1557001685597",
          name: "loreta-pavoliene-2173-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.996Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb361",
          content: "Est labore magnam quia vero cum et ea.",
          created_at: "2019-05-06T20:06:27.016Z",
          user: {
            email: "amelie_stokes90@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb360",
            password: "YDUwhKrsoADdLsW",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb363",
          content: "Facere id modi dicta ut eum autem.",
          created_at: "2019-05-06T20:06:27.016Z",
          user: {
            email: "sarina97@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb362",
            password: "EL0Q0YOa2HJeOgB",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb365",
          content:
            "Sed aliquam eos labore occaecati reiciendis quo voluptatibus cum.",
          created_at: "2019-05-06T20:06:27.017Z",
          user: {
            email: "rickie.barton23@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb364",
            password: "hQS2xhaZbi20ZWh",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb367",
          content: "Placeat animi beatae.",
          created_at: "2019-05-06T20:06:27.018Z",
          user: {
            email: "mauricio_barton5@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb366",
            password: "_Ag_POemkDiAnfB",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb369",
          content: "Laborum rerum et a perferendis non reprehenderit.",
          created_at: "2019-05-06T20:06:27.019Z",
          user: {
            email: "jermaine.lang@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb368",
            password: "QsxLxsPPcRza9kQ",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd095f5022d33568f912911",
          content: "nope\n",
          gallery: "5cd093c30cce80535c1bb35f",
          user: {
            email: "AnonymousUser@gmail.com",
            isHuman: true,
            galleries: [
              "5cd0963b022d33568f912914",
              "5cd094f4042fe355dab67d25",
              "5cd093c30cce80535c1bb375",
              "5cd093c30cce80535c1bb35f",
              "5cd093c30cce80535c1bb3cd",
              "5cd093c30cce80535c1bb345",
              "5cd093c30cce80535c1bb34f",
              "5cd093c20cce80535c1bb32f",
              "5cd093c30cce80535c1bb381",
              "5cd093c30cce80535c1bb3d5",
              "5cd093c30cce80535c1bb36b",
              "5cd093c30cce80535c1bb3db",
              "5cd093c30cce80535c1bb337",
              "5cd093c30cce80535c1bb393",
              "5cd093c30cce80535c1bb3b1",
              "5cd093c30cce80535c1bb33d",
              "5cd093c30cce80535c1bb357",
              "5cd093c30cce80535c1bb399",
              "5cd093c30cce80535c1bb3b9"
            ],
            comments: [
              "5cd094fc042fe355dab67d28",
              "5cd09518042fe355dab67d2b",
              "5cd0954c022d33568f912908",
              "5cd09553022d33568f912909",
              "5cd09572022d33568f91290d",
              "5cd0957e022d33568f91290f",
              "5cd095ed022d33568f912910",
              "5cd095f5022d33568f912911",
              "5cd09607022d33568f912912",
              "5cd0962f022d33568f912913"
            ],
            _id: "5cd094de042fe355dab67d24",
            __v: 14
          },
          created_at: "2019-05-06T20:15:49.089Z",
          __v: 0
        },
        {
          visible: true,
          _id: "5cd09607022d33568f912912",
          content: "ok\n",
          gallery: "5cd093c30cce80535c1bb35f",
          user: {
            email: "AnonymousUser@gmail.com",
            isHuman: true,
            galleries: [
              "5cd0963b022d33568f912914",
              "5cd094f4042fe355dab67d25",
              "5cd093c30cce80535c1bb375",
              "5cd093c30cce80535c1bb35f",
              "5cd093c30cce80535c1bb3cd",
              "5cd093c30cce80535c1bb345",
              "5cd093c30cce80535c1bb34f",
              "5cd093c20cce80535c1bb32f",
              "5cd093c30cce80535c1bb381",
              "5cd093c30cce80535c1bb3d5",
              "5cd093c30cce80535c1bb36b",
              "5cd093c30cce80535c1bb3db",
              "5cd093c30cce80535c1bb337",
              "5cd093c30cce80535c1bb393",
              "5cd093c30cce80535c1bb3b1",
              "5cd093c30cce80535c1bb33d",
              "5cd093c30cce80535c1bb357",
              "5cd093c30cce80535c1bb399",
              "5cd093c30cce80535c1bb3b9"
            ],
            comments: [
              "5cd094fc042fe355dab67d28",
              "5cd09518042fe355dab67d2b",
              "5cd0954c022d33568f912908",
              "5cd09553022d33568f912909",
              "5cd09572022d33568f91290d",
              "5cd0957e022d33568f91290f",
              "5cd095ed022d33568f912910",
              "5cd095f5022d33568f912911",
              "5cd09607022d33568f912912",
              "5cd0962f022d33568f912913"
            ],
            _id: "5cd094de042fe355dab67d24",
            __v: 14
          },
          created_at: "2019-05-06T20:16:07.458Z",
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb35f",
      created_at: "2019-05-06T20:06:27.016Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 3
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb32c",
          key: "image-gallery-site/1557001689440",
          name: "dmitry-sovyak-454058-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.998Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3cf",
          content:
            "Quia eum itaque nihil est voluptatum numquam quisquam ratione.",
          created_at: "2019-05-06T20:06:27.045Z",
          user: {
            email: "brett_oconner90@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3ce",
            password: "NppjSbOIOwRLJYF",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3d1",
          content: "Velit non a odit.",
          created_at: "2019-05-06T20:06:27.046Z",
          user: {
            email: "armando_stanton@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3d0",
            password: "HXN7A_t3JCAgbxr",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3d3",
          content: "Quo at reiciendis.",
          created_at: "2019-05-06T20:06:27.046Z",
          user: {
            email: "darian.boyer81@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3d2",
            password: "rqfKkWJrhryhfjJ",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd09753022d33568f912918",
          content: "ok\n",
          gallery: "5cd093c30cce80535c1bb3cd",
          user: {
            email: "AnonymousUser@gmail.com",
            isHuman: true,
            galleries: [
              "5cd093c30cce80535c1bb375",
              "5cd093c30cce80535c1bb35f",
              "5cd093c30cce80535c1bb3cd",
              "5cd093c30cce80535c1bb345",
              "5cd093c30cce80535c1bb34f",
              "5cd093c20cce80535c1bb32f",
              "5cd093c30cce80535c1bb381",
              "5cd093c30cce80535c1bb3d5",
              "5cd093c30cce80535c1bb36b",
              "5cd093c30cce80535c1bb3db",
              "5cd093c30cce80535c1bb337",
              "5cd093c30cce80535c1bb393",
              "5cd093c30cce80535c1bb3b1",
              "5cd093c30cce80535c1bb33d",
              "5cd093c30cce80535c1bb357",
              "5cd093c30cce80535c1bb399",
              "5cd093c30cce80535c1bb3b9"
            ],
            comments: ["5cd09753022d33568f912918", "5cd09766022d33568f91291a"],
            _id: "5cd096fa022d33568f912917",
            __v: 2
          },
          created_at: "2019-05-06T20:21:39.160Z",
          __v: 0
        },
        {
          visible: true,
          _id: "5cd09766022d33568f91291a",
          content: "no\n",
          gallery: "5cd093c30cce80535c1bb3cd",
          user: {
            email: "AnonymousUser@gmail.com",
            isHuman: true,
            galleries: [
              "5cd093c30cce80535c1bb375",
              "5cd093c30cce80535c1bb35f",
              "5cd093c30cce80535c1bb3cd",
              "5cd093c30cce80535c1bb345",
              "5cd093c30cce80535c1bb34f",
              "5cd093c20cce80535c1bb32f",
              "5cd093c30cce80535c1bb381",
              "5cd093c30cce80535c1bb3d5",
              "5cd093c30cce80535c1bb36b",
              "5cd093c30cce80535c1bb3db",
              "5cd093c30cce80535c1bb337",
              "5cd093c30cce80535c1bb393",
              "5cd093c30cce80535c1bb3b1",
              "5cd093c30cce80535c1bb33d",
              "5cd093c30cce80535c1bb357",
              "5cd093c30cce80535c1bb399",
              "5cd093c30cce80535c1bb3b9"
            ],
            comments: ["5cd09753022d33568f912918", "5cd09766022d33568f91291a"],
            _id: "5cd096fa022d33568f912917",
            __v: 2
          },
          created_at: "2019-05-06T20:21:58.699Z",
          __v: 0
        },
        {
          visible: true,
          _id: "5cd09836022d33568f91291c",
          content: "hey\n",
          gallery: "5cd093c30cce80535c1bb3cd",
          user: {
            email: "AnonymousUser@gmail.com",
            isHuman: true,
            galleries: [
              "5cd09844022d33568f91291e",
              "5cd093c30cce80535c1bb375",
              "5cd093c30cce80535c1bb35f",
              "5cd093c30cce80535c1bb3cd",
              "5cd093c30cce80535c1bb345",
              "5cd093c30cce80535c1bb34f",
              "5cd093c20cce80535c1bb32f",
              "5cd093c30cce80535c1bb381",
              "5cd093c30cce80535c1bb3d5",
              "5cd093c30cce80535c1bb36b",
              "5cd093c30cce80535c1bb3db",
              "5cd093c30cce80535c1bb337",
              "5cd093c30cce80535c1bb393",
              "5cd093c30cce80535c1bb3b1",
              "5cd093c30cce80535c1bb33d",
              "5cd093c30cce80535c1bb357",
              "5cd093c30cce80535c1bb399",
              "5cd093c30cce80535c1bb3b9"
            ],
            comments: ["5cd09836022d33568f91291c"],
            _id: "5cd0982e022d33568f91291b",
            __v: 2
          },
          created_at: "2019-05-06T20:25:26.736Z",
          __v: 0
        },
        {
          visible: true,
          _id: "5cd09dc9022d33568f91292d",
          content: "e\n",
          gallery: "5cd093c30cce80535c1bb3cd",
          user: {
            email: "AnonymousUser@gmail.com",
            isHuman: true,
            galleries: [
              "5cd093c30cce80535c1bb375",
              "5cd093c30cce80535c1bb35f",
              "5cd093c30cce80535c1bb3cd",
              "5cd093c30cce80535c1bb345",
              "5cd093c30cce80535c1bb34f",
              "5cd093c20cce80535c1bb32f",
              "5cd093c30cce80535c1bb381",
              "5cd093c30cce80535c1bb3d5",
              "5cd093c30cce80535c1bb36b",
              "5cd093c30cce80535c1bb3db",
              "5cd093c30cce80535c1bb337",
              "5cd093c30cce80535c1bb393",
              "5cd093c30cce80535c1bb3b1",
              "5cd093c30cce80535c1bb33d",
              "5cd093c30cce80535c1bb357",
              "5cd093c30cce80535c1bb399",
              "5cd093c30cce80535c1bb3b9"
            ],
            comments: ["5cd09dc9022d33568f91292d"],
            _id: "5cd09dbb022d33568f91292c",
            __v: 1
          },
          created_at: "2019-05-06T20:49:13.341Z",
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb3cd",
      created_at: "2019-05-06T20:06:27.045Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 5
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb31e",
          key: "image-gallery-site/1557001684950",
          name: "haiqal-osman-1394800-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.996Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb347",
          content: "Excepturi ipsa enim voluptas aut et accusamus atque.",
          created_at: "2019-05-06T20:06:27.010Z",
          user: {
            email: "chance_glover@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb346",
            password: "ggKe3j21ONx86Aj",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb349",
          content: "Quam quis ipsa itaque accusamus.",
          created_at: "2019-05-06T20:06:27.011Z",
          user: {
            email: "lia_trantow@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb348",
            password: "ujVmZcEfRo8H7sK",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb34b",
          content: "Enim nihil nisi eos possimus aut molestiae amet dolore.",
          created_at: "2019-05-06T20:06:27.011Z",
          user: {
            email: "cheyanne22@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb34a",
            password: "mqaF0okhv_YcAdW",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb34d",
          content: "Cum sapiente voluptas animi aperiam aut enim veniam modi.",
          created_at: "2019-05-06T20:06:27.011Z",
          user: {
            email: "deangelo88@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb34c",
            password: "AOwVBNi1E0MPfk5",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb345",
      created_at: "2019-05-06T20:06:27.009Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb31f",
          key: "image-gallery-site/1557001683914",
          name: "ioana-farcas-33320-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.996Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb351",
          content: "Et alias explicabo deleniti suscipit.",
          created_at: "2019-05-06T20:06:27.012Z",
          user: {
            email: "terrance_harvey@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb350",
            password: "mhr7Rxt46bjLFDr",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb353",
          content: "Corrupti ut quos et eveniet eum eius dolor quia adipisci.",
          created_at: "2019-05-06T20:06:27.013Z",
          user: {
            email: "sid68@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb352",
            password: "ONqJMDiqGLM_a5D",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb355",
          content: "Commodi sint hic atque nihil.",
          created_at: "2019-05-06T20:06:27.013Z",
          user: {
            email: "maritza38@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb354",
            password: "T35hQVmv7_wQywR",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb34f",
      created_at: "2019-05-06T20:06:27.012Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb31b",
          key: "image-gallery-site/1557001684191",
          name: "david-schultz-1475807-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.995Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb331",
          content: "Qui illo id qui voluptatem et.",
          created_at: "2019-05-06T20:06:27.000Z",
          user: {
            email: "beryl_ernser77@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb330",
            password: "E_GobKBN5SMGWKN",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb333",
          content:
            "Voluptas soluta quis assumenda dolore voluptate aut incidunt nam et.",
          created_at: "2019-05-06T20:06:27.003Z",
          user: {
            email: "kenton_funk@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb332",
            password: "FaUORgo8SdehWKd",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb335",
          content: "Tempora culpa rerum.",
          created_at: "2019-05-06T20:06:27.004Z",
          user: {
            email: "shany.orn@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb334",
            password: "tF9M2upo4s2PpYK",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c20cce80535c1bb32f",
      created_at: "2019-05-06T20:06:26.998Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb324",
          key: "image-gallery-site/1557001685147",
          name: "leonard-von-bibra-1506324-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.997Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb383",
          content:
            "A qui nisi sunt consectetur a voluptatibus nam voluptate qui.",
          created_at: "2019-05-06T20:06:27.024Z",
          user: {
            email: "zella50@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb382",
            password: "yXqFjBo9N6GR5gm",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb385",
          content:
            "Libero quia reprehenderit est voluptas saepe fugit id et nihil.",
          created_at: "2019-05-06T20:06:27.025Z",
          user: {
            email: "cyril99@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb384",
            password: "yV3BkwZZb3lI_b_",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb387",
          content: "Autem quos quia eveniet non.",
          created_at: "2019-05-06T20:06:27.026Z",
          user: {
            email: "oda62@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb386",
            password: "JgyDWIpXzXYJROQ",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb389",
          content: "Voluptas occaecati aut ab est error neque porro.",
          created_at: "2019-05-06T20:06:27.027Z",
          user: {
            email: "celine_dietrich0@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb388",
            password: "hej5og_bqmc9K3s",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb381",
      created_at: "2019-05-06T20:06:27.024Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb32d",
          key: "image-gallery-site/1557001687066",
          name: "matthias-jordan-367209-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.998Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3d7",
          content: "Non voluptatem ipsum.",
          created_at: "2019-05-06T20:06:27.047Z",
          user: {
            email: "doug_bauch@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3d6",
            password: "7nSUNj_JrZrelYE",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3d9",
          content: "Ipsam distinctio error veritatis illo voluptas.",
          created_at: "2019-05-06T20:06:27.047Z",
          user: {
            email: "emerson.collier@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3d8",
            password: "soalsuU7dKvZOtY",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb3d5",
      created_at: "2019-05-06T20:06:27.046Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb322",
          key: "image-gallery-site/1557001684190",
          name: "ganapathy-kumar-1137539-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.996Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb36d",
          content:
            "Quia voluptatum atque ipsam nemo similique nulla delectus inventore alias.",
          created_at: "2019-05-06T20:06:27.020Z",
          user: {
            email: "yolanda.olson86@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb36c",
            password: "BUJV7p3c0rKZv9q",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb36f",
          content: "Aut natus et recusandae dolorum earum.",
          created_at: "2019-05-06T20:06:27.020Z",
          user: {
            email: "geo.denesik70@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb36e",
            password: "a130SvhuuAXhMwk",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb371",
          content: "Minima optio ratione alias molestiae quia rerum repellat.",
          created_at: "2019-05-06T20:06:27.021Z",
          user: {
            email: "jordane.botsford39@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb370",
            password: "e_ZQr1A6eOK9IHz",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb373",
          content: "Provident aperiam accusamus illo ut commodi voluptatem.",
          created_at: "2019-05-06T20:06:27.021Z",
          user: {
            email: "rosamond.smith@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb372",
            password: "GLSuyDgpfdAQJPX",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb36b",
      created_at: "2019-05-06T20:06:27.019Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb32e",
          key: "image-gallery-site/1557001688544",
          name: "osama-saeed-1334736-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.998Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3dd",
          content: "Adipisci autem accusantium soluta.",
          created_at: "2019-05-06T20:06:27.048Z",
          user: {
            email: "milford_strosin90@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3dc",
            password: "yLzQ8fJZlU05XR_",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3df",
          content:
            "Excepturi et aut temporibus provident voluptatem minus voluptates commodi.",
          created_at: "2019-05-06T20:06:27.048Z",
          user: {
            email: "vaughn.adams88@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3de",
            password: "qtnK1ptUiDTPTR3",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3e1",
          content: "Aut reprehenderit occaecati unde et quam.",
          created_at: "2019-05-06T20:06:27.048Z",
          user: {
            email: "roscoe_smitham91@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3e0",
            password: "XlS4cJWLwA9ojtH",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3e3",
          content: "Libero ipsum aliquid atque officia et minus rerum vero.",
          created_at: "2019-05-06T20:06:27.050Z",
          user: {
            email: "robbie38@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3e2",
            password: "GINSfjTyhk3BYXE",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3e5",
          content: "Similique quia aut.",
          created_at: "2019-05-06T20:06:27.050Z",
          user: {
            email: "durward.parisian27@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3e4",
            password: "JbGIjnTdQNfN2TZ",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3e7",
          content: "Enim dolor repellat.",
          created_at: "2019-05-06T20:06:27.050Z",
          user: {
            email: "korbin_spinka@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3e6",
            password: "Hge54V4WiE1vZlj",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd0962f022d33568f912913",
          content: "ok\n",
          gallery: "5cd093c30cce80535c1bb3db",
          user: {
            email: "AnonymousUser@gmail.com",
            isHuman: true,
            galleries: [
              "5cd0963b022d33568f912914",
              "5cd094f4042fe355dab67d25",
              "5cd093c30cce80535c1bb375",
              "5cd093c30cce80535c1bb35f",
              "5cd093c30cce80535c1bb3cd",
              "5cd093c30cce80535c1bb345",
              "5cd093c30cce80535c1bb34f",
              "5cd093c20cce80535c1bb32f",
              "5cd093c30cce80535c1bb381",
              "5cd093c30cce80535c1bb3d5",
              "5cd093c30cce80535c1bb36b",
              "5cd093c30cce80535c1bb3db",
              "5cd093c30cce80535c1bb337",
              "5cd093c30cce80535c1bb393",
              "5cd093c30cce80535c1bb3b1",
              "5cd093c30cce80535c1bb33d",
              "5cd093c30cce80535c1bb357",
              "5cd093c30cce80535c1bb399",
              "5cd093c30cce80535c1bb3b9"
            ],
            comments: [
              "5cd094fc042fe355dab67d28",
              "5cd09518042fe355dab67d2b",
              "5cd0954c022d33568f912908",
              "5cd09553022d33568f912909",
              "5cd09572022d33568f91290d",
              "5cd0957e022d33568f91290f",
              "5cd095ed022d33568f912910",
              "5cd095f5022d33568f912911",
              "5cd09607022d33568f912912",
              "5cd0962f022d33568f912913"
            ],
            _id: "5cd094de042fe355dab67d24",
            __v: 14
          },
          created_at: "2019-05-06T20:16:47.283Z",
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb3db",
      created_at: "2019-05-06T20:06:27.047Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 1
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb31c",
          key: "image-gallery-site/1557001683923",
          name: "mohammad-aqhib-1480511-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.996Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb339",
          content: "Eum laboriosam fugiat nobis itaque sit modi.",
          created_at: "2019-05-06T20:06:27.006Z",
          user: {
            email: "adonis6@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb338",
            password: "QhI3JebhuJb7mLO",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb33b",
          content: "Culpa quas cumque.",
          created_at: "2019-05-06T20:06:27.006Z",
          user: {
            email: "daphney47@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb33a",
            password: "SqCFC7ShW42c38Q",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb337",
      created_at: "2019-05-06T20:06:27.005Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb326",
          key: "image-gallery-site/1557001686747",
          name: "michael-kooiman-1134654-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.997Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb395",
          content: "Ut rem aut doloremque porro.",
          created_at: "2019-05-06T20:06:27.029Z",
          user: {
            email: "loren14@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb394",
            password: "BBxqgCYlRR4nnyy",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb397",
          content:
            "Amet atque inventore iste deserunt similique numquam optio.",
          created_at: "2019-05-06T20:06:27.030Z",
          user: {
            email: "weldon.lehner46@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb396",
            password: "lCiUs3C4QKyufFr",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb393",
      created_at: "2019-05-06T20:06:27.029Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb329",
          key: "image-gallery-site/1557001689051",
          name: "guillaume-baudusseau-433743-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.998Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3b3",
          content: "Quaerat ea ad illum sit quaerat.",
          created_at: "2019-05-06T20:06:27.038Z",
          user: {
            email: "katelynn_wilkinson@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3b2",
            password: "i92mwZNQc35NDLs",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3b5",
          content: "Necessitatibus veniam eum ea et.",
          created_at: "2019-05-06T20:06:27.038Z",
          user: {
            email: "lourdes.jacobi82@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3b4",
            password: "WmjM_zFS9eQND9j",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3b7",
          content:
            "Neque sit ut voluptatum illum eos aspernatur et reprehenderit.",
          created_at: "2019-05-06T20:06:27.039Z",
          user: {
            email: "antoinette_adams@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3b6",
            password: "DdB10Sy4_fUbeFB",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb3b1",
      created_at: "2019-05-06T20:06:27.038Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb31d",
          key: "image-gallery-site/1557001685052",
          name: "samuel-zeller-103103-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.996Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb33f",
          content:
            "Voluptatem perspiciatis dicta temporibus quos perspiciatis commodi.",
          created_at: "2019-05-06T20:06:27.007Z",
          user: {
            email: "rasheed.kautzer@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb33e",
            password: "dKAVOHx0epzrNY_",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb341",
          content: "Eligendi dolorem magnam repellendus sit.",
          created_at: "2019-05-06T20:06:27.008Z",
          user: {
            email: "ansley.harber42@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb340",
            password: "fIXgNQIyX2gRGwb",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb343",
          content: "Est qui et fugit dicta mollitia.",
          created_at: "2019-05-06T20:06:27.008Z",
          user: {
            email: "uriah_stark11@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb342",
            password: "VBBc9lJWaIpdupI",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb33d",
      created_at: "2019-05-06T20:06:27.007Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb320",
          key: "image-gallery-site/1557001685787",
          name: "missmushroom-1201587-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.996Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb359",
          content:
            "Dolor error quidem exercitationem magnam veritatis et occaecati.",
          created_at: "2019-05-06T20:06:27.014Z",
          user: {
            email: "kamille26@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb358",
            password: "c5njc7zg9deX6xb",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb35b",
          content:
            "Consectetur molestiae et corrupti quia dolorem ducimus ut ea veritatis.",
          created_at: "2019-05-06T20:06:27.014Z",
          user: {
            email: "macie.mosciski@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb35a",
            password: "PTcACEMykbe5kuj",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb35d",
          content:
            "Quisquam assumenda dolores pariatur labore minima perspiciatis.",
          created_at: "2019-05-06T20:06:27.015Z",
          user: {
            email: "elias_johnson@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb35c",
            password: "eYjyfgG7zmBKSWs",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb357",
      created_at: "2019-05-06T20:06:27.014Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb327",
          key: "image-gallery-site/1557001686625",
          name: "annie-spratt-1288465-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.997Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb39b",
          content: "Et voluptatibus blanditiis similique perspiciatis.",
          created_at: "2019-05-06T20:06:27.030Z",
          user: {
            email: "olen_toy18@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb39a",
            password: "zHhfE_JrCvHg7BB",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb39d",
          content: "Itaque et dicta sed.",
          created_at: "2019-05-06T20:06:27.031Z",
          user: {
            email: "randy_bauch78@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb39c",
            password: "n63CEB4md5Heg9l",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb39f",
          content: "Perferendis ut ipsam dolorum possimus qui.",
          created_at: "2019-05-06T20:06:27.031Z",
          user: {
            email: "lucio.hoppe82@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb39e",
            password: "VNB49pf7AQZHj92",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3a1",
          content: "Aut ipsam non sint est illo maiores ut et.",
          created_at: "2019-05-06T20:06:27.032Z",
          user: {
            email: "raegan.emmerich@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3a0",
            password: "mq1k_ASv04OFODA",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3a3",
          content: "Est doloremque dolore architecto ad.",
          created_at: "2019-05-06T20:06:27.032Z",
          user: {
            email: "viva_price@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3a2",
            password: "XpWGIGDHfTDu7b1",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3a5",
          content: "Et rerum pariatur blanditiis.",
          created_at: "2019-05-06T20:06:27.035Z",
          user: {
            email: "margarita_kuhic@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3a4",
            password: "NsB6DpqFWK_pLfX",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb399",
      created_at: "2019-05-06T20:06:27.030Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    },
    {
      visible: true,
      deleteVisible: false,
      images: [
        {
          _id: "5cd093c20cce80535c1bb32a",
          key: "image-gallery-site/1557001688351",
          name: "ellena-mcguinness-1455796-unsplash.jpg",
          created_at: "2019-05-06T20:06:26.998Z",
          __v: 0
        }
      ],
      comments: [
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3bb",
          content: "Aut modi iure.",
          created_at: "2019-05-06T20:06:27.040Z",
          user: {
            email: "suzanne.goldner11@hotmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3ba",
            password: "Qy1w5wqb_qDS44U",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3bd",
          content: "Eaque iste atque dolore veritatis ea eos.",
          created_at: "2019-05-06T20:06:27.041Z",
          user: {
            email: "veda99@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3bc",
            password: "eWQZELM8vYf03uX",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3bf",
          content: "Perferendis et earum voluptatibus.",
          created_at: "2019-05-06T20:06:27.041Z",
          user: {
            email: "era32@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3be",
            password: "Aw65m6YQbUaM5v_",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3c1",
          content: "Distinctio velit aut.",
          created_at: "2019-05-06T20:06:27.041Z",
          user: {
            email: "annabelle_schumm@gmail.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3c0",
            password: "tPb3Wm9uTT3M5gr",
            __v: 0
          },
          __v: 0
        },
        {
          visible: true,
          _id: "5cd093c30cce80535c1bb3c3",
          content: "Eveniet voluptas quas commodi labore et dicta a quidem.",
          created_at: "2019-05-06T20:06:27.043Z",
          user: {
            email: "dario.moore5@yahoo.com",
            isHuman: false,
            galleries: [],
            comments: [],
            _id: "5cd093c30cce80535c1bb3c2",
            password: "YE9LuWxB3cbwXQx",
            __v: 0
          },
          __v: 0
        }
      ],
      _id: "5cd093c30cce80535c1bb3b9",
      created_at: "2019-05-06T20:06:27.039Z",
      user: "5cd093c20cce80535c1bb31a",
      __v: 0
    }
  ]
};

const getters = {
  getGallery: state => state.gallery,
  isGallerySelected: state => !!state.gallery,
  getGalleries: state => state.galleries,
  getCounter: state => state.counter,
  getUser: state => state.user,
  getSeedUser: state => state.seedUser
};

const actions = {
  async getSeedData({ commit }) {
    await axios.get("http://localhost:3001/getSeedUser").then(response => {
      commit("setSeedUser", response.data);
      return response.data;
    });
  },
  async createUser({ commit }) {
    await axios.post("http://localhost:3001/createUser").then(response => {
      commit("setUser", response.data);
      router.push("/galleries");
      return response.data;
    });
  },
  async getUserData({ commit }) {
    await axios
      .post(`http://localhost:3001/userInfo`, {
        user: state.user
      })
      .then(response => {
        commit("setUser", response.data);
        return response.data;
      });
  },
  fetchGalleries({ commit }) {
    axios
      .get("http://localhost:3001/", { user: state.user })
      .then(async response => {
        commit("setGalleries", response.data);
        return response.data;
      });
  },
  resetGalleries({ commit }) {
    commit("setGalleries", []);
  },
  resetGallery({ commit }) {
    commit("setGallery", "");
  },
  incrementCounter({ commit }) {
    commit("plusCounter");
  },
  logout({ commit }) {
    commit("setUser", "");
  }
};

const mutations = {
  setGallery: (state, gallery) => {
    state.gallery = gallery;
  },
  setGalleries: (state, galleries) => {
    state.galleries = galleries;
  },
  pushGallery: (state, gallery) => {
    state.galleries.push(gallery);
  },
  plusCounter: state => {
    state.counter += 1;
  },
  setUser: (state, user) => {
    state.user = user;
  },
  setSeedUser: (state, seedUser) => {
    state.seedUser = seedUser;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
