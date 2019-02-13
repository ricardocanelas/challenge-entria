export default {
  products: {
    all: () => {
      return new Promise((res) => {
        window.setTimeout(function () {
          res(products)
        }, 100);
      })
    },
    save: (data) => {
      return new Promise((res) => {
        window.setTimeout(function () {
          const newData = { ...data };
          if (!newData.id) {
            // add a random ID
            newData.id = Math.random().toString(36).substring(2);
            newData.created_at = new Date().getTime();
          } else {
            newData.updated_at = new Date().getTime();
          }
          // normalize the price property
          newData.price = Number(parseFloat(newData.price).toFixed(2));
          res(newData);
        }, 500);
      })
    },
    remove: (data) => {
      return new Promise((res) => {
        window.setTimeout(function () {
          res(data)
        }, 700);
      })
    },
  },
}

const products = [
  {
    id: 'A0010',
    title: 'Dining Chair',
    price: 109.99,
    image_url: 'https://cdn.jysk.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/0/708-14-1032_chair5.jpg',
    description: `The KEMI Dining Chair is an example of high end contemporary style that’s still exceptionally comfortable thanks to its plush seating. Black bonded leather upholstery wraps a sturdy wood frame with Espresso finished legs for a striking look accented by the button tufted back that completes an otherwise simple design with a touch of elegance.`,
    created_at: 1548208800002,
  },
  {
    id: 'A0003',
    title: 'Mac Mini',
    price: 1180.90,
    image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/mini/mac-mini-hero-201810?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1541713854402',
    description: `The 2018 Mac mini is broadly the same design as the previous model, but with one major change: it now comes in Space Grey rather than Silver, a move Apple said is partly to appeal to the pro crowd.\n\nThe size is also exactly the same - dashing any hopes for a smaller Mac mini, which makes sense given the significantly improved specs of the new model. So once again this measures 3.6cm tall and 19.7cm wide. It weighs 1.3kg - a very slight jump from the previous 1.22kg.\n\nThe final design change - Apple has switched to using 100 percent recycled aluminium thanks to a new custom alloy, along with more recycled plastic than before, making this a little more eco-friendly.`,
    created_at: 1548208800002,
  },
  {
    id: 'A0002',
    title: 'Macbook Pro 13',
    price: 1900.0,
    image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13/space/mbp13-space-select-201807?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1529520054457',
    description: 'The 2018 13-inch MacBook Pro looks just like its 2017 and 2016 predecessors, but the design is holding up rather well. It\'s a slim aluminum beast, made in silver and space gray with elegant, tapered edges.\nThe bezel around the screen may be thicker than you\'ll find on rivals such as the Huawei MateBook X Pro and the Dell XPS 15 but I\'m OK with that.',
    created_at: 1548208800001,
  },
  {
    id: 'A0004',
    title: 'iPhone 8',
    price: 799.90,
    image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/select/iphone8-select-2017?wid=212&hei=292&fmt=png-alpha&.v=1503618523038',
    description: 'The iPhone 8 and iPhone 8 Plus are smartphones designed, developed, and marketed by Apple Inc. It is the eleventh generation of the iPhone. They were announced on September 12, 2017, alongside the higher-end iPhone X, at the Steve Jobs Theater in the Apple Park campus, and were released on September 22, 2017, succeeding iPhone 7 and iPhone 7 Plus.',
    created_at: 1548208800002,
  },
  {
    id: 'A0005',
    title: 'Watch 4',
    price: 410.99,
    image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/4/4/44/alu/44-alu-space-sport-black-nc-s4-grid_GEO_BR?wid=270&hei=275&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1538158483664',
    description: 'Apple Watch is a line of smartwatches designed, developed, and marketed by Apple Inc. It incorporates fitness tracking and health-oriented capabilities with integration with iOS and other Apple products and services.',
    created_at: 1548208800001,
  },
  {
    id: 'A0006',
    title: 'Mercedes-Benz C-Class',
    price: 28075.00,
    image_url: 'https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/68b434356333685e8a4ffef053a28b12.png',
    description: `The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque's line-up until the W168 A-Class arrived in 1997.\n\nThough originally available as a sedan and a station wagon, the W203 series in 2000 debuted a fastback coupé (SportCoupé) version that, when facelifted, became the Mercedes-Benz CLC-Class. The CLC-Class remained in production until 2011 when it was replaced by a new W204 C-Class coupé for the 2012 model year.`,
    created_at: 1548208800006,
  },
  {
    id: 'A0007',
    title: 'Smart TV LED 43',
    price: 498.00,
    image_url: '//images.samsung.com/is/image/samsung/sg-uhd-nu7100-ua43nu7100kxxs-frontblack-98561826?$PD_GALLERY_L_JPG$',
    description: `An intelligent way to enjoy the smart TV.\n\nGet to your entertainment the faster, easier, and more intelligent way. Search less, and watch more with the newly enhanced intuitive Samsung Smart Hub. Enjoying TV has never been this simple.`,
    created_at: 1548208800006,
  },
  {
    id: 'A0008',
    title: 'Atomic Habit',
    price: 19.10,
    image_url: 'https://i0.wp.com/robbymiles.com/wp-content/uploads/2018/10/AtomicHAbits.jpg?resize=210%2C300&ssl=1',
    description: `An Easy & Proven Way to Build Good Habits & Break Bad Ones.\n\nLearn how to… \n1 - Build a system for getting 1% better every day. \n2 - Break your bad habits and stick to good ones. \n3 - Avoid the common mistakes most people make when changing habits. \n4 - Overcome a lack of motivation and willpower. \n5 - Develop a stronger identity and believe in yourself. \n6 - Make time for new habits (even when life gets crazy). \n7 - Design your environment to make success easier. \n8 - Make tiny, easy changes that deliver big results. \n9 - Get back on track when you get off course. \n10 - And most importantly, how to put these ideas into practice in real life.`,
    created_at: 1548208800006,
  },
  {
    id: 'A0009',
    title: 'The Web of Life: A New Scientific Understanding of Living Systems',
    price: 12.19,
    image_url: 'https://images-na.ssl-images-amazon.com/images/I/51Cv3UbFTHL._SX322_BO1,204,203,200_.jpg',
    description: `The Web of Life: A New Scientific Understanding of Living Systems.\n\nDuring the past twenty-five years, scientists have challenged conventional views of evolution and the organization of living systems and have developed new theories with revolutionary philosophical and social implications. Fritjof Capra has been at the forefront of this revolution. In The Web of Life, Capra offers a brilliant synthesis of such recent scientific breakthroughs as the theory of complexity, Gaia theory, chaos theory, and other explanations of the properties of organisms, social systems, and ecosystems. Capra's surprising findings stand in stark contrast to accepted paradigms of mechanism and Darwinism and provide an extraordinary new foundation for ecological policies that will allow us to build and sustain communities without diminishing the opportunities for future generations.`,
    created_at: 1548208800006,
  },
];

