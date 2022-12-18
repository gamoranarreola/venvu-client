import { Account } from "./account";

export  interface GenericApiResponse {
  data: Account | undefined;
  errors: [];
  success: boolean;
  status: number;
}
