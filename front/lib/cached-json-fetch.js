import lscache from 'lscache';
import axios from 'axios'

const TTL_MINUTES = 5;

export default async function (url, options) {
  // We don't cache anything when server-side rendering.
  // That way if users refresh the page they always get fresh data.
  if (typeof window === 'undefined') {
    return await axios({
      url,
      method: options.method,
      data: options.data
    })
  }

  let cachedResponse = lscache.get(url);

  // If there is no cached response,
  // do the actual call and store the response
  if (cachedResponse === null) {
    cachedResponse = await axios({
      url,
      method: options.method,
      data: options.data
    })
    lscache.set(url, cachedResponse, TTL_MINUTES);
  }

  return cachedResponse;
}

export function overrideCache(key, val) {
  lscache.set(key, val, TTL_MINUTES);
}

// import lscache from 'lscache';
// import fetch from 'isomorphic-fetch';

// const TTL_MINUTES = 5;

// export default async function (url, options, method) {
//   // We don't cache anything when server-side rendering.
//   // That way if users refresh the page they always get fresh data.
//   if (typeof window === 'undefined') {
//     return fetch(url, options).then(response => response.json());
//   }

//   let cachedResponse = lscache.get(url);

//   // If there is no cached response,
//   // do the actual call and store the response
//   if (cachedResponse === null) {
//     cachedResponse = await fetch(url, options)
//       .then(response => response.json());
//     lscache.set(url, cachedResponse, TTL_MINUTES);
//   }

//   return cachedResponse;
// }

// export function overrideCache(key, val) {
//   lscache.set(key, val, TTL_MINUTES);
// }