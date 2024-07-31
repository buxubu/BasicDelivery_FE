import { OrderDetailModel } from './OrderDetailModel';

export interface OrderModel {
  orderId: number ;
  userId: number;
  receiverAddress: string;
  receiverDistrict: string;
  receiverWard: string;
  receiverName: string;
  receiverPhone: string;
  shipCost: number | null;
  totalMoney: number| null;
  paymentMethod: boolean| null;
  status: number| null;
  location: string| null;
  driverAcceptAt: Date| null;
  completeAt: Date| null;
  userNote: string| null;
  deliveryNote: string| null;
  totalGamPackage: number| null;
  imagesPackages: string| null;
  uploadImagesPackage: File | null;
  widePackage: number| null;
  heightPackage: number| null;
  longPackage: number| null;
  totalPriceProduct: number| null;
  totalCod: number| null;
  active: boolean| null;
  driverId: number| null;
  userPhone: string| null;
  userName: string| null;
  userAddress: string| null;
  estimatedDeliveryDate: Date| null;
  failedDeliveryMoney: number| null;
  requestSeeProduct: boolean| null;
  statusDetail: string| null;

  listOrderDetail: OrderDetailModel[];
}
