import { atom, useRecoilState } from 'recoil'

const memberInfoInRecoil = atom<MemberInfo | null>({
  key: 'memberInfo',
  default: null,
})

export const useMemberInfoInRecoil = () => {
  return useRecoilState(memberInfoInRecoil)
}
