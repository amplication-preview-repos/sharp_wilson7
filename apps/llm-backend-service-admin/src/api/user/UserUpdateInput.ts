import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  company?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  organizationDomain?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
