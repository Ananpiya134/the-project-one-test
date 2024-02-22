import axios from "@services/axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { API_BASE_URL } from "@/configs/constants";

import type { UserStore } from "./types";

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        id: undefined,
        email: undefined,
        phoneNumber: undefined,
        firstName: undefined,
        lastName: undefined,
        profilePicture: undefined,
        myPropertyCount: undefined,
        about: undefined,
        currency: undefined,
        thaiNationalIdNumber: undefined,
        passportNo: undefined,
        coverPhoto: undefined,
        passportPhoto: undefined,
        thaiNationalIdCardPhoto: undefined,
        isVerifyEmail: undefined,
        isVerifyPhoneNumber: undefined,
        isVerifyThaiNationalId: undefined,
        isVerify: undefined,
        verifyThaiNationalIdStatus: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        lineId: undefined,
        whatsAppId: undefined,
        weChatId: undefined,
        status: undefined,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        userTypes: undefined,
        privacyPolicies: undefined,
        language: undefined,
      },
      fetchUser: () => {
        const getUser = async () => {
          const response = await axios.get(`${API_BASE_URL}/users/me`);
          console.log(response);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          set((prev: UserStore) => ({
            ...prev,
            user: {
              ...prev.user,
              ...response.data.user,
            },
          }));
        };

        getUser();
      },

      setNationalIdCard: (value) => {
        set((prev) => ({
          ...prev,
          user: {
            ...prev.user,
            ...value,
            isVerifyThaiNationalId: true,
          },
        }));
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
