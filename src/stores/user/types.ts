import { User } from "@/types/user";

export interface UserState {
  user: Partial<User>;
}

export interface UserAction {
  fetchUser: () => void;
  setNationalIdCard: (value: {
    thaiNationalIdNumber: string;
    thaiNationalIdCardPhoto: string;
  }) => void;
}

export type UserStore = UserState & UserAction;
