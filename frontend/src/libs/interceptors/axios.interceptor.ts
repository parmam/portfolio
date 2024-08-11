import axios, {  InternalAxiosRequestConfig } from 'axios';
import { getInLocalStorage, LocalStorageKeys, saveInLocalStorage } from '@libs/utils/local-storage.utils';

export const AxiosInterceptor = () => {

  saveInLocalStorage(LocalStorageKeys.TOKEN, '123123123123');

  const updateHeader = (request: InternalAxiosRequestConfig) => {

    const token = getInLocalStorage(LocalStorageKeys.TOKEN);
    request.headers.set('Authorization', token);
    request.headers.set('Content-Type', 'application/json');
    return request;
  };

  axios.interceptors.request.use((request) => {
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};