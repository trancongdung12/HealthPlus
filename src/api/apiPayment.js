/* eslint-disable prettier/prettier */
import http from './http';

export async function configPayment(data) {
  return http.post('https://polar-taiga-31053.herokuapp.com/api/payment', data);
}
