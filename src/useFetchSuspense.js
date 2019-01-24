import LRU from 'lru-cache'
import md5 from 'md5'
import produce from 'immer' // make data immutable

const cache = new LRU(50)

export default (url, fetchOptions = {}) => {
  // build cache key with url and fetchOptions
  const key = `${url}.${md5(JSON.stringify(fetchOptions))}`
  // look up value of cache key
  // first run of cache is empty so we initialise it
  const value = cache.get(key) || { status: 'first cache call', data: null }

  console.log(value)
  // return resolved cache value data
  if (value.status === "cache resolved") {
    return value.data
  }

  // or newly initialised cache must resolve request and convert to JSON
  const promise = fetch(url, fetchOptions).then(res => res.json())

  // provide cache the fetched (res.json) data
  promise.then(data => {
    // update the cache
    cache.set(
      key,
      // make copy of previous value and update with API call data
      produce(value, draft => {
        draft.status = "cache resolved"
        draft.data = data
      }))
  })

  // Throw a promise, caught by <Suspense> (index.js) which performs a rerender of data.js (via useFetchSuspense.js) now populated with API data.
  throw promise
}