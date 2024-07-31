export interface OrderDetailModel {
  orderDetailId: number;
  orderId: number| null;
  imagesProduct: string| null;
  uploadImagesProduct: File| null;
  gam: number| null;
  quantity: number| null;
  productId: number| null;
  productName: string| null;
}
