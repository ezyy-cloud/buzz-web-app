const products = {
  namespaced: true,
  state: () => ({
    items: [
      {
        title: "BuzzTV",
        id: "3240i59u3409trj3",
        price: "213.00",
        images: [
          {
            link:
              "https://www.topleo.com/wp-content/uploads/2019/12/i96-C-705x705.jpg",
            color: "black"
          },
          {
            link:
              "https://www.myhdplayer.de/media/image/product/663/lg/himedia-s500-4k-ultra-hd-android-tv-box.jpg",
            color: "white"
          }
        ],
        reviews: [3, 4, 5, 6, 2, 4],
        about: [
          `A BuzzTV Box is a set top box which connects your TV to the 
                    Buzz Network, an IPTV service, delivering content to your 
                    customers tailored to suit your set preferences. 
                    All content is suitable for public locations.`,

          `BuzzTV Box pays you for 
                    every advert that plays on your screen 
                    and allows you to moderate and set 
                    preferences of the Ads you show on 
                    screen. (See Ts & Cs)`,

          `BuzzTV Box comes with a cloud console 
                    providing you control over what is shown on your screens.`,

          `BuzzTV Console allows you to add 
                    various content which provides actionable business 
                    information to increase customer engagement 
                    and knowledge of your products and services.`
        ],
        requirements: [
          `TV with HDMI input`,
          `Power Supply`,
          `Buzz Console account`
        ],
        specifications: [`4GB RAM`, `32GB ROM`, `Amtec Processor`],
        tAndCs: [
          `BuzzTV is part of a network that earns revenue advertising through
                    third party owned devices. To ensure our advertisers get value for
                    their money, we have set terms and conditions which need to be met
                    for you to earn revenue from your screens. Please read carefully
                    and understand the terms and conditions below before purchasing
                    the Box as we conditionally accept refunds.`,
          `Add BuzzEye to your location to provide video feed of audience
                    that view the screen. All footage is owned by the BuzzEye
                    owner and will only be used for verification and advertisement
                    placement optimization. Verification process is automated.`,
          `Send a picture, every month, of your location with peak
                    visitors with the Box TV display in clear view. This
                    verification might require direct contact with BuzzTV if
                    picture sent to us is not clear.`,
          `Once verification is completed, you will start earning 40% of
                    revenue from every advert placed on your screen.`,
          `BuzzTV constantly works torwards improvement of its security to
                    avoid hijacking of screens by malicious players. Any tempering of
                    the Box will nulllify and void all warranties and guranttees that
                    come with the Box.`
        ],
        active: true
      },
      {
        title: "BuzzFi",
        id: "kjrgenwgbl4wt54",
        price: "190.00",
        images: [
          {
            link:
              "https://ubiquitistore.com.au/wp-content/uploads/2020/06/Ubiquiti-nHD-cover-Black-3-ubiquiti-store.jpg",
            color: "black"
          },
          {
            link:
              "https://www.skycomp.com.au/media/catalog/product/cache/cf3f2243ef4940fd5c66f2ff035145ac/U/A/UAP-nanoHD-3-1.jpg",
            color: "white"
          }
        ],
        reviews: [3, 4, 4, 2, 4, 4],
        about: [
          `BuzzFi Node is a device which connects spaces to the internet via the BuzzFi network
                    providing the space occupants with 2G and 5G bandwidth for uninterrupted web access suitable
                    for heavy users. BuzzFi is powered by Ubiquiti, a trusted internet solutions provider.`,

          `BuzzFi Nodes generate income for public location owners who wish to monetise 
                    the mobile traffic in their locations.`,

          `Your BuzzFi network can be managed and controlled on the Buzz Cloud console 
                    allowing you to manage your billing services.`,

          `BuzzFi is an end to end solution. Once you plug it in and pair it with your account,
                    you can start selling internet to your customers`
        ],
        requirements: [`Power Supply`, `Buzz Console account`],
        specifications: [`2G Antenna`, `5G Antenna`, `Meshing Technology`],
        tAndCs: [
          `BuzzFi is part of a network that earns revenue advertising through
                    third party owned devices. To ensure our advertisers get value for
                    their money, we have set terms and conditions which need to be met
                    for you to earn revenue from your BuzzFi Nodes. Please read carefully
                    and understand the terms and conditions below before purchasing
                    the Node as we conditionally accept refunds.`
        ],
        active: true
      },
      {
        title: "BuzzSolar",
        id: "ewrgegtehgtrh4",
        price: "415.00",
        reviews: [3, 5, 3, 2, 4],
        active: false
      },
      {
        title: "BuzzEye",
        id: "ewrgegtehgtrerte5wrt43wh4",
        price: "140.00",
        reviews: [3, 3, 3, 3, 2, 4],
        active: false
      },
      {
        title: "BuzzPay",
        id: "ewrtrtwerty3t42vfd4",
        price: "234.00",
        reviews: [3, 1, 2, 3, 4, 2],
        active: false
      },
      {
        title: "BuzzLED",
        id: "4334543tgewrgrhewth",
        price: "23.00",
        reviews: [3, 4, 3, 3, 3, 3, 4, 4],
        active: false
      },
      {
        title: "BuzzRadio",
        id: "ewrgegtehgtr4t34yhrehh4",
        price: "53.00",
        reviews: [3, 4, 4, 4, 4, 5, 2, 4],
        active: false
      }
    ]
  }),
  mutations: {
    increment(state: { count: number }) {
      // 'state' is the local module state
      state.count++;
    }
  },

  getters: {
    getProducts(state: { items: any[] }) {
      return state.items.filter((item: { active: boolean }) => item.active);
    },
    getProduct(state: { items: { [x: string]: any } }) {
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            return state.items[index];
          }
        }
        if (!found) {
          return 0;
        }
      };
    },
    getImages(state: { items: string | any[] }) {
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            return state.items[index].images;
          }
        }
      };
    },
    getRating(state: { items: string | any[] }) {
      const average = (arr: any[]) =>
        arr.reduce((p: any, c: any) => p + c, 0) / arr.length;
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            return average(state.items[index].reviews);
          }
        }
        if (!found) {
          return 0;
        }
      };
    },
    getAbout(state: { items: string | any[] }) {
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            return state.items[index].about;
          }
        }
        if (!found) {
          return 0;
        }
      };
    },
    getRequirements(state: { items: string | any[] }) {
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            return state.items[index].requirements;
          }
        }
        if (!found) {
          return 0;
        }
      };
    },
    getSpecifications(state: { items: string | any[] }) {
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            return state.items[index].specifications;
          }
        }
        if (!found) {
          return 0;
        }
      };
    },
    getTandCs(state: { items: string | any[] }) {
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            return state.items[index].tAndCs;
          }
        }
        if (!found) {
          return 0;
        }
      };
    }
  }
};
export default products;
