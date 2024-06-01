import { create } from 'zustand';

const useMentoringListStore = create((set) => ({
  mentoringList: [],
  setMentoringList: (data) => set(() => ({ mentoringList: data })),
  resetMentoringList: () => set(() => ({ mentoringList: [] })),
}));

export default useMentoringListStore;
