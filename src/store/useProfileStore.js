import { create } from 'zustand';

const useProfileStore = create((set) => ({
  profile: {},
  setProfile: (data) => set(() => ({ profile: data })),
  resetProfile: () => set(() => ({ profile: {} })),
}));

export default useProfileStore;
