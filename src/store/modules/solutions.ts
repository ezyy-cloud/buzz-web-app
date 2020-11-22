const solutions = {
  namespaced: true,
  state: () => ({
    items: [
      {
        title: "Hive 1.0",
        id: "efkl2mt2p4kpo5k2395",
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
      { title: "Smart Kombi", id: 2 },
      { title: "Leaf", id: 3 }
    ]
  }),
  mutations: {
    increment(state: { count: number }) {
      // 'state' is the local module state
      state.count++;
    }
  },

  getters: {
    getSolutions(state: { items: any[] }) {
      return state.items.filter((item: { active: boolean }) => item.active);
    },
    getSolution(state: { items: { [x: string]: any } }) {
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
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
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
export default solutions;
