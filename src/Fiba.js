import React from "react"
import useWorker from "./useWorker"

function fibz(n) {
  if (n < 2) return n
  return fibz(n - 2) + fibz(n - 1)
}
const Fiba = ({ num }) => {
  // custom hook: "useWorker"
  // workerpool requires array i.e [num]
  const result = useWorker(fibz, [num])

  return <h1 style={{ marginBottom: 10 }}>{num} : {result}</h1>
}
export default Fiba


