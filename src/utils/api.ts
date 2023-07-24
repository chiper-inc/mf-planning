import axios from 'axios';
import { TokenHandler } from './tokenHandler';

interface Params {
  customApi?: boolean;
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  body?: any;
  params?: Record<string, any>;
  headers?: any;
}

const TIMEOUT_FETCH = 180000;

let API_URL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

const api = async <R>({
  url,
  headers,
  method,
  body,
  params,
  customApi,
}: Params) => {
  if (url[0] === '/') {
    url = url.slice(1);
  }

  const defaultHeaders: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const token = TokenHandler.getToken();

  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }

  const controller = new AbortController();

  const axiosParameters = {
    url: `${customApi ? '' : API_URL + '/'}${url}`,
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    timeout: TIMEOUT_FETCH,
    signal: controller.signal,
    data: body,
    params,
  };

  return new Promise<{ data: R }>((resolve, reject) => {
    axios<any, { data: R }>(axiosParameters)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

const get = <R>(params: Params) => {
  return api<R>({ ...params, method: 'get' });
};

const post = <R = any>(params: Params) => {
  return api<R>({ ...params, method: 'post' });
};

const put = <R = any>(params: Params) => {
  return api<R>({ ...params, method: 'put' });
};

const remove = <R = any>({
  url,
  headers,
  body,
  params,
  customApi,
}: Params): Promise<any> => {
  return api<R>({ url, headers, method: 'delete', body, params, customApi });
};

const formData = ({
  url,
  body,
  headers = {},
  method,
  params,
}: Params): Promise<any> => {
  return api({
    url,
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      ...headers,
    },
    method,
    params,
  });
};

export { post, get, put, formData, remove };
