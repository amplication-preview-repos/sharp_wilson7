import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DemoRequestWhereInput = {
  company?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  preferredTime?: StringNullableFilter;
};
