import fake from './fakedata'

export default {
  products: {
    all: () => {
      return new Promise((res) => {
        window.setTimeout(function () {
          res(fake.products)
        }, 2000);
      })
    },
  },
}
