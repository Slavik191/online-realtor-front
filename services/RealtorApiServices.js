import axios from "axios";
import https from "https";

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

const getHeaderToken = (tokenType, token) => {
  return {
    headers: {
      'Authorization': `${tokenType} ${token}`
    }
  }
}

class RealtorApiServices {
  constructor(restUrl) {
    this.restUrl = restUrl
  }

    auth(username, password) {
    const url = this.restUrl + "/Token";
  
    return instance.post(url, 
      "grant_type=" + "password" +
      "&username=" + username +
      "&password=" + password
    );
  }

  announcements() {
    const url = this.restUrl + "/api/General";

    return instance.get(url);
  }

  newAnnouncements(tokenType, token) {
    const url = this.restUrl + "/api/admin/ChekProp";

    return instance.get(url, getHeaderToken(tokenType, token));
  }

  deleteAnnouncement(tokenType, token, contractID) {
    const url = this.restUrl + "/api/admin/DellProp";

    return instance.post(url, { contractID } , getHeaderToken(tokenType, token));
  }

  confirmAnnouncement(tokenType, token, contractID) {
    const url = this.restUrl + "/api/admin/Confirm";

    return instance.put(url, { contractID } , getHeaderToken(tokenType, token));
  }

  statistics(tokenType, token, month) {
    const url = encodeURI(this.restUrl + `/api/admin/statistic?mounts=${month}&years=2020&city=all`);
    
    const headers = getHeaderToken(tokenType, token).headers;
    headers['Content-Type'] = 'application/json';
    
    return instance.get(url, { headers });
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
