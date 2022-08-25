import { initReactQueryAuth } from 'react-query-auth';
import { Spinner } from '@/components/Elements/Spinner/Spinner';

//import { getUser } from '@/features/auth/api/getUser';
//import { registerWithEmailAndPassword, RegisterCredentialsDTO } from '@/features/auth/api/register';
import { UserResponse, AuthUser } from '@/features/auth/types';
import storage from '@/utils/storage';
import { axios } from '@/lib/axios';

// import { useState } from 'react';
// import { API_URL } from '@/config';

type LoginCredentialsDTO = {
  email: string;
  password: string;
};

type RegisterCredentialsDTO = {
  username: string;
  email: string;
  password: string;
};

// async function handleUserResponse(data: UserResponse) {
//   const { access } = data;
//   storage.setToken(access);
//   return null;
// }

async function loadUser() {
  const token = storage.getToken()
  if (token) {
    const data = await getUser();
    console.log('fuga')
    return data;
  }
  return null;
}

async function getUser(): Promise<AuthUser> {
  return axios.get('/auth/users/me/')
}



async function loginFn(data: LoginCredentialsDTO) {
  const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<UserResponse> => {
    return axios.post('/auth/jwt/create/', data);
  };
  const response = await loginWithEmailAndPassword(data);
  const { access } = response;
  storage.setToken(access);
  const user = await getUser();
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const registerWithEmailAndPassword = (data: RegisterCredentialsDTO): Promise<AuthUser> => {
    return axios.post('/auth/users/', data);
  };
  const getJWTtoken = (data: LoginCredentialsDTO): Promise<UserResponse> => {
    return axios.post('/auth/jwt/create/', data);
  };

  const user = await registerWithEmailAndPassword(data);
  const login_obj =  (({ email, password }) => ({ email, password }))(data);
  const response = await getJWTtoken(login_obj);
  const { access } = response;
  storage.setToken(access);
  return user;
}

async function logoutFn() {
  storage.clearToken();
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

export const { AuthProvider, AuthConsumer, useAuth } = initReactQueryAuth<
  AuthUser | null,
  any,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);

// const authConfig = {
//   loadUser,
//   loginFn,
//   registerFn,
//   logoutFn,
//   LoaderComponent() {
//     return (
//       <div className="w-screen h-screen flex justify-center items-center">
//         <Spinner size="xl" />
//       </div>
//     );
//   },
// };
// export const { AuthProvider, useAuth } = initReactQueryAuth<
//   AuthUser | null,
//   unknown,
//   LoginCredentialsDTO,
//   RegisterCredentialsDTO
// >(authConfig);
