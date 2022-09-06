// basic axios encapsulation using class
import axios from 'axios';
import { BASE_URL, TIME_OUT } from './config';

class Request {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
      withCredentials: false,
    })
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