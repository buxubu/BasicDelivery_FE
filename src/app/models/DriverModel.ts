export interface DriverModel {
  driverId: number;
  fullName: string | null;
  email: string | null;
  avatar: string | null;
  address: string | null;
  passwordHash: string | null;
  salt: string | null;
  active: boolean | null;
  createDate: Date | null;
  lastLogin: Date | null;
  reviewRate: number | null;
  role: string | null;
  phone: string | null;

  driverDetails: []
}
