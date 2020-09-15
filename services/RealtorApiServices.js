import axios from "axios";



class RealtorApiServices {
  constructor(restUrl) {
    this.restUrl = restUrl
  }

  auth(Username, Password) {
    const url = this.restUrl + "/Token";

    console.log(url)
    console.log(Username, Password)

    return axios.post(url, {
      Username,
      Password
    });
  }

  announcements() {
    const url = this.restUrl + "/api/General";

    console.log(url)
    return axios.get(url);
  }

  // balance(to, coin) {
  //   const url = this.restUrl + "/balance";

  //   return axios.post(url, {
  //     to,
  //     coin
  //   });
  // }

  // history(to, page, type) {
  //   const url = this.restUrl + "/history";

  //   return axios.post(url, {
  //     to,
  //     page,
  //     type,
  //     limit: ROWS_PER_PAGE
  //   });
  // }

  // deposit(to) {
  //   const url = this.restUrl + "/deposit";

  //   return axios.post(url, {
  //     to,
  //     coin: COIN.KAVA
  //   });
  // }

  // withdraw(from, address, amount, memo, coin) {
  //   const url = this.restUrl + "/withdraw";

  //   return axios.post(url, {
  //     from,
  //     address,
  //     amount,
  //     memo,
  //     coin
  //   });
  // }

  // transfer(from, to, amount, coin) {
  //   const url = this.restUrl + "/transfer";

  //   return axios.post(url, {
  //     from,
  //     to,
  //     amount,
  //     coin
  //   });
  // }

  // user(to) {
  //   const url = this.restUrl + "/user";

  //   return axios.post(url, {
  //     to
  //   });
  // }
}

export default new RealtorApiServices("https://localhost:44378");