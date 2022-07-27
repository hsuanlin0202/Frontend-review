export interface QueryInfoTypes {
  title: string;
  content: string | string[] | undefined;
}

export interface PayInfoTypes {
  orderNo: string;
  payId: string;
  businessTypeName: string;
  amount: string;
  paymentInfo: QueryInfoTypes[];
  businessType: string;
  payFor: string;
  additionalData: string | undefined;
  img: string;
  acctId: string;
  apiErrorCode: string | undefined;
}
