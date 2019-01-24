import React, { Suspense, Fragment } from "react"
import Fiba from './Fiba'

const LoadingCalc = ({ num }) => <h2>Loading fibonacci for {num}</h2>
const foo = 10
const bar = 42

export default () => {
  return (
    <Fragment>
      <Suspense fallback={<LoadingCalc num={foo} />}>
        <Fiba num={foo} />
      </Suspense>
      <Suspense fallback={<LoadingCalc num={bar} />}>
        <Fiba num={bar} />
      </Suspense>
    </Fragment>
  )
}