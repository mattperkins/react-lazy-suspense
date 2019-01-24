import LRU from 'lru-cache'
import md5 from 'md5'
import produce from 'immer' // make data immutable
import workerpool from "workerpool" // 

const cache = new LRU(50)
const pool = new workerpool.pool()

window.workerCache = cache

export default (func, args) => {

  const key = `${func.name}.${md5(JSON.stringify(args))}`
  const value = cache.get(key) || { status: 'first cache call', data: null }

  console.log(value)

  if (value.status === "cache resolved") {
    return value.data
  }

  cache.set(key, value)
  const promise = pool.exec(func, args)

  promise.then(data => {

    cache.set(
      key,

      produce(value, draft => {
        draft.status = "cache resolved"
        draft.data = data
      }))
  })

  throw promise
}