interface JoinUserDataType {
  userId: string
  password: string
  userName: string
  userEmail: string
  userPhone: string
}

interface LoginInputType {
  userId: string
  password: string
}

// login
interface LoginResponse {
  token: string
  userId: string
  userName: string
  userEmail: string
  userPhone: string
}

// DiaryCard
interface DiaryCardProps {
  diary: DiaryType
}

// recoil
// member
interface MemberInfo {
  userId: string
  userName: string
  userEmail: string
  userPhone: string
}

// diary
interface DiaryType {
  _id: number
  contents: string
  createdAt: string
}
