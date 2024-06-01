import { create } from 'zustand';

const useLectureStore = create((set) => ({
  lecture: {},
  setLecture: (data) => set(() => ({ lecture: data })),
  resetLecture: () => set(() => ({ lecture: {} })),
}));

export default useLectureStore;
