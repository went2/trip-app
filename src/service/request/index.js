// basic axios encapsulation using class
import axios from 'axios';
import { BASE_URL, TIME_OUT } from './config';

// global loading control
import useMainStore from '@/store/modules/main';
const mainStore = useMainStore();

class Request {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
      withCredentials: false,
    });

    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true;
      return config;
    },
    err => {
      return err;
    });

    this.instance.interceptors.response.use(response => {
      mainStore.isLoading = false;

      return response;
    }, err => {
      mainStore.isLoading = false;

      return err;
    });
  }

  _request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        })
    });
  }

  get(config) {
    return this._request({ ...config, method: 'get' });
  }

  post(config) {
    return this._request({ ...config, method: 'post' });
  }
}

export default new Request(BASE_URL, TIME_OUT);