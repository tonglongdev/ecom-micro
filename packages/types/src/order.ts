// import { OrderSchemaType } from "@repo/order-db";

// export type OrderType = OrderSchemaType & {
export type OrderType = {
  _id: string;
};

export type OrderChartType = {
  month: string;
  total: number;
  successful: number;
};
