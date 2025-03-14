import ky from 'ky';
const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TIMEOUT = 500;

const api = ky.extend({
  hooks: {
    beforeRequest: [() => timeout(TIMEOUT)],
  },
  prefixUrl: '/api/',
  retry: 0,
});

export const request = {
  get: async (url) => {
    return await api.get(url).json();
  },

  post: async (url, payload) => {
    return await api.post(url, { json: payload }).json();
  },

  put: async (url, payload) => {
    return await api.put(url, { json: payload }).json();
  },

  delete: async (url, payload) => {
    return await api.delete(url, { json: payload }).json();
  },
};
