import internal from 'stream';
import { DriverModel } from './DriverModel';

export interface DriverViewModel {
  driverId: number;
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
  reviewRate: number | null;
  role: string | null;
  phone: string | null;

  driverDetailId: number;
  licenseNumber: string;
  vehicleModel: string | null;
  font: string | null;
  uploadFont: File | null;
  back: string | null;
  uploadBack: File | null;
}
