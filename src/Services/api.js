import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com'
});

const api = {
  GET: (route) => {
    const promise = (resolve, reject) => {
      return instance
        .get(route)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    };

    return new Promise(promise);
  },
  POST: (route, params = null) => {
    const promise = (resolve, reject) => {
      instance
        .post(route, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    };

    return new Promise(promise);
  },
  PUT: (route, params = null) => {
    const promise = (resolve, reject) => {
      instance
        .put(route, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    };

    return new Promise(promise);
  },
  DELETE: (route) => {
    const promise = (resolve, reject) => {
      instance
        .delete(route)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    };

    return new Promise(promise);
  }
};

export { api };
