import { SortOrder } from "../../util/SortOrder";

export type DemoRequestOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  preferredTime?: SortOrder;
  updatedAt?: SortOrder;
};
