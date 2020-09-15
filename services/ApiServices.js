import useSwr from 'swr';
import axios from "axios";

const REFRESH_INTERVAL = 5000;

const fetcher = (url) => axios.get(url).then((res) => res.data);

class ApiService {
  auth(email, password) {
    const url = `/api/auth?email=${email}&password=${password}`;
    return fetcher(url);
  }
  
  // balance(coin) {
  //   return useSwr(`/api/balance?coin=${coin}`, fetcher, {
  //     refreshInterval: REFRESH_INTERVAL
  //   });
  // }

  // history(page, typeTrx) {
  //   return useSwr(`/api/history?page=${page}&typeTrx=${typeTrx}`, fetcher, {
  //     refreshInterval: REFRESH_INTERVAL
  //   });
  // }

  // deposit() {
  //   return useSwr("/api/deposit", fetcher);
  // }

  // withdraw(address, amount, memo, coin) {
  //   const url = `/api/withdraw?address=${address}&amount=${amount}&memo=${memo}&coin=${coin}`;

  //   return fetcher(url);
  // }

  // transfer(to, amount, coin) {
  //   const url = `/api/transfer?to=${to}&amount=${amount}&coin=${coin}`;

  //   return fetcher(url);
  // }
}

export default new ApiService();