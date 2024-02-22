import { User } from "@/types/user";

export interface UserState {
  user: Partial<User>;
}

export interface UserAction {
  fetchUser: () => void;
}

export type UserStore = UserState & UserAction;
