const carts = {
  namespaced: true,
  state: () => ({
    items: []
  }),
  mutations: {
    addItemToCart(state: { items: any[] }, payload: any) {
      let added = false;
      // Filter array to find item
      for (let index = 0; index < state.items.length; index++) {
        if (state.items[index].id === payload.id) {
          const newArray = [...state.items];
          newArray[index] = {
            ...newArray[index],
            quantity: ++newArray[index].quantity
          };
          state.items = newArray;
          added = true;
          break;
        }
      }
      if (!added) {
        const newItem = {
          id: payload.id,
          type: payload.type,
          quantity: 1
        };
        const newArray = [...state.items, newItem];
        state.items = newArray;
      }
    },
    removeItemFromCart(state: { items: any[] }, payload: any) {
      for (let index = 0; index < state.items.length; index++) {
        if (state.items[index].id === payload.id) {
          if (state.items[index].quantity > 0) {
            const newArray = [...state.items];
            newArray[index] = {
              ...newArray[index],
              quantity: --newArray[index].quantity
            };
            state.items = newArray;
          }
          break;
        }
      }
    }
  },
  actions: {
    addItem(
      context: { commit: (arg0: string, arg1: any) => void },
      payload: any
    ) {
      context.commit("addItemToCart", payload);
    },
    removeItem(
      context: { commit: (arg0: string, arg1: any) => void },
      payload: any
    ) {
      context.commit("removeItemFromCart", payload);
    }
  },

  getters: {
    getCart(state: { items: any[] }) {
      return (type: string | number) =>
        state.items.filter(
          (item: { type: string | number; quantity: number }) =>
            item.type === type && item.quantity > 0
        );
    },
    getItemQuantity(state: { items: any[] }) {
      return (id: string | number) => {
        let found = false;
        for (let index = 0; index < state.items.length; index++) {
          if (state.items[index].id === id) {
            found = true;
            console.log(state.items[index].quantity);
            return state.items[index].quantity;
          }
        }
        if (!found) {
          return 0;
        }
      };
    }
  }
};
export default carts;
