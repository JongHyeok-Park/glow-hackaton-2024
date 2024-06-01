import { create } from 'zustand';

const useUserStore = create((set) => ({
  User: {},
  setUser: (data) => set(() => ({ User: data })),
  resetUser: () => set(() => ({ User: {} })),
}));

export default useUserStore;
