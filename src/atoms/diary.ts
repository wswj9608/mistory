import { atom, useRecoilState } from 'recoil'

const diariesInRecoil = atom<DiaryType[]>({
  key: 'diaries',
  default: [],
})

export const useDiariesInRecoil = () => {
  return useRecoilState(diariesInRecoil)
}
