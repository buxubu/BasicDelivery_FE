export interface UserModel {
  userId: number;
  fullName: string;
  email: string;
  avatar: string;
  address: string;
  passwordHash: string;
  salt: string;
  active: boolean;
  createDate: Date;
  lastLogin: Date;
  role: string;
  phone: string;
}
