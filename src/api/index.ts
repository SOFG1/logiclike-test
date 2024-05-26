import axios, { AxiosInstance, AxiosResponse } from "axios";

const primaryApiUrl = `https://logiclike.com/docs/`;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: primaryApiUrl,
});

export const handle = (promise: Promise<AxiosResponse<any>>) => {
  return promise
    .then((data) => [data.data, undefined])
    .catch((error) => Promise.resolve([undefined, error]));
};
