import { Root } from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef } from "react";

export interface DialogProps extends ComponentPropsWithoutRef<typeof Root> {
  handleSubmitNationalIdCardForm: (data: FormValue) => void;
  isFormSubmit: boolean;
}

export interface FormValue {
  thaiNationalIdCardNo: string;
  thaiNationalIdCardImage: string;
}
