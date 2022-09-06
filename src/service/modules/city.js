import request from "../request";

export function getAllCities(config) {
  return request.get({
    url: 'city/all',
    ...config
  })
}