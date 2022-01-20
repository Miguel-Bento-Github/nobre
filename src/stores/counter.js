import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "user",
  state: () => ({
    firstName: "",
    lastName: "",
  }),
  getters: {
    fullName: (state) => `${state.firstName} ${state.lastName}`,
  },
  actions: {
    setName(payload) {
      this.firstName = payload;
    },
  },
});
