export interface AuthUser {
  username: string;
  id: string;
  email: string;
}

export type UserResponse = {
  refresh: string;
  access: string;
}
  