function apiFactory(headers) {
  let topFetch
  let topRequest
  if (typeof window !== 'undefined') {
    if (window.fetch) { topFetch = window.fetch.bind(window) }
    if (window.Request) { topRequest = window.Request.bind(window) }
  } else if (typeof global !== 'undefined') {
    if (global.fetch) { topFetch = global.fetch.bind(global) }
    if (global.Request) { topRequest = global.Request.bind(global) }
  } else if (typeof self !== 'undefined') {
    if (self.fetch) { topFetch = self.fetch.bind(self) }
    if (self.Request) { topRequest = self.Request.bind(self) }
  }

  function buildRequest(mapping) {
    return new mapping.Request(mapping.url, {
      method: mapping.method,
      headers: mapping.headers,
      credentials: mapping.credentials,
      redirect: mapping.redirect,
      body: mapping.body,
    })
  }

  function handleResponse(response) {
    if (response.headers.get('content-length') === '0' || response.status === 204) {
      return
    }
    const json = response.json()
    if (response.status >= 200 && response.status < 300) { // TODO: support custom acceptable statuses
      return json
    }
    return json.then(cause => Promise.reject(new Error(cause)))
  }

  const _defaultMapping = {
    buildRequest,
    handleResponse,
    headers,
    credentials: 'same-origin',
    method: 'GET',
    fetch: topFetch,
    Request: topRequest,
  }

  function _fetch(mapping) {
    if (typeof mapping === 'string') {
      mapping = { url: mapping }
    }
    mapping.headers = Object.assign(mapping.headers || {}, _defaultMapping.headers)
    mapping = Object.assign({}, _defaultMapping, mapping)

    const request = mapping.buildRequest(mapping)
    return mapping.fetch(request).then(mapping.handleResponse)
  }

  return {
    fetch: _fetch,
  }
}

export default apiFactory({
  Accept: 'application/json',
  'Content-Type': 'application/json',
}).fetch
