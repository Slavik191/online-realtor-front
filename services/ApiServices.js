import useSwr from 'swr';
import axios from "axios";

const REFRESH_INTERVAL = 5000;

const fetcher = (url) => axios.get(url).then((res) => res.data);

class ApiService {
  auth(email, password) {
    const url = `/api/auth?email=${email}&password=${password}`;
    return fetcher(url);
  }

  announcements() {
    return useSwr("/api/announcements", fetcher, {
      // refreshInterval: REFRESH_INTERVAL
    });
  }

  newAnnouncements(tokenType, token) {
    return useSwr(`/api/new-announcements?tokenType=${tokenType}&token=${token}`, fetcher, {
      // refreshInterval: REFRESH_INTERVAL
    });
  }

  deleteAnnouncement(tokenType, token, contractID) {
    return fetcher(`/api/delete-announcement?tokenType=${tokenType}&token=${token}&contractID=${contractID}`); 
  }

  confirmAnnouncement(tokenType, token, contractID) {
    return fetcher(`/api/confirm-announcement?tokenType=${tokenType}&token=${token}&contractID=${contractID}`); 
  }

  statistics(tokenType, token, month) {
    return useSwr(`/api/statistics?tokenType=${tokenType}&token=${token}&month=${month}`, fetcher, {
      // refreshInterval: REFRESH_INTERVAL
    });
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