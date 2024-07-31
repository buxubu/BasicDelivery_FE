export interface UserViewModel {
  userId: number;
  fullName: string | null;
  email: string | null;
  avatar: string | null;
  uploadAvatar: File | null;
  address: string | null;
  passwordHash: string | null;
  salt: string | null;
  active: boolean | null;
  createDate: Date | null;
  lastLogin: Date | null;
  role: string | null;
  phone: string | null;
}