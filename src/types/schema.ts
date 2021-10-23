export type productDetails = {
  productId?: string;
  title?: string;
  price?: number;
  mrp?: number;
  discount?: number;
  deliveryCost?: number;
  freeDeliveryOver?: number;
  deliveryDays?: number;
  images?: any[];
  description?: string[];
  specifications?: any;
  replacementInDays?: number;
  deliveryService?: string;
  warrantyInYear?: number;
};

export type gridDetails = {
  header?: string;
  imgDetails?: imageDetails[];
};

export type imageDetails = {
  img?: string;
  title?: string;
};

export type gridDao = {
  gridPart?: gridDetails[];
};