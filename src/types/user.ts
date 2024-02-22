export type Language = {
  id: number;
  languageCode: string;
  languageName: string;
};

export type UserPrivacyPolicy = {
  id: number;
  userId: number;
  privacyPolicyId: number;
  isAccept: boolean;
  createdAt: string;
  updatedAt: string;
  privacy_policy_id: number;
  user_id: number;
};

export interface PrivacyPolicy {
  id: number;
  title: string;
  data: string;
  isAccept: boolean;
  UserPrivacyPolicy: UserPrivacyPolicy;
}

export interface User {
  id: number;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  myPropertyCount: number;
  about: string;
  currency: string;
  thaiNationalIdNumber: string;
  passportNo: string;
  coverPhoto: string;
  passportPhoto: string;
  thaiNationalIdCardPhoto: string;
  isVerifyEmail: boolean;
  isVerifyPhoneNumber: boolean;
  isVerifyThaiNationalId: boolean;
  isVerify: boolean;
  verifyThaiNationalIdStatus: string;
  createdAt: string;
  updatedAt: string;
  lineId: string;
  whatsAppId: string;
  weChatId: string;
  status: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userTypes: any;
  privacyPolicies: Partial<PrivacyPolicy>;
  language: Partial<Language>;
}

export interface PutUserResponse {
  thaiNationalIdNumber: number;
  isVerify: boolean;
  id: number;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  myPropertyCount: number;
  isVerifyEmail: boolean;
  isVerifyPhoneNumber: boolean;
  about: string;
  languageCode: string;
  currency: string;
  passportNo: string;
  coverPhoto: string;
  selfiePhoto: string;
  passportPhoto: string;
  thaiNationalIdCardPhoto: string;
  isVerifyThaiNationalId: boolean;
  createdAt: string;
  updatedAt: string;
  userTypes: string[];
}
