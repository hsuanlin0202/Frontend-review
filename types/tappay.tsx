export interface ChannelTypes {
  businessType: string;
  paymentType: string;
  status: string;
}

export interface BindListTypes {
  memberId: string;
  cardKey: string;
  bankCode: string;
  cardCategory: number;
  cardType: number;
  expiryDate: string;
  cardName: string;
  binCode: string;
  lastFour: string;
  cardIdentifier: string;
  isDefault: string;
  status: string;
}

export interface PaymentResultTypes {
  status: number | null;
  orderNo: string;
  rentTime: string;
  paidAmt: number;
}
