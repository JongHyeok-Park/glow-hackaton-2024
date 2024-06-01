import { create } from 'zustand';

const useLectureListStore = create((set) => ({
  lectureList: [],
  setLectureList: (data) => set(() => ({ lectureList: data })),
  resetLectureList: () => set(() => ({ lectureList: [] })),
}));

export default useLectureListStore;
