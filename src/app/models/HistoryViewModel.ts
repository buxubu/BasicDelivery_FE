export interface HistoryViewModel {
  historyId: number;
  orderId: number;
  receiverName: string;
  receiverAddress: string;
  receiverPhone: string;
  totalMoneyOrder: number | null;
  paymentString: string | null;
  status: number | null;
  orderDate: Date | null;
  changeDate: Date | null;
  statusDetail: string | null;
  driverId: number | null;
  driverName: string | null;
  reason: string | null;
}
