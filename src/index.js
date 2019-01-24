import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import Nav from "./Nav"
import './css/reset.css'
import './css/style.css'

const Home = React.lazy(() => import("./Home"))
const Data = React.lazy(() => import("./Data"))
const Calc = React.lazy(() => import("./Calc"))
const Loading = () => <h1>Loading...</h1>

// main ("ROOT") component 
class Root extends React.Component {

  render() {

    return (

      <div className="wrapper">
        <Nav />

        <Suspense fallback={<Loading />}>
          <Router>
            <Home path="/" />
            <Data path="/data" />
            <Calc path="/calc" />
          </Router>
        </Suspense>

      </div>


    )// end return
  }// end render
}// end component

ReactDOM.render(<Root />,
  document.getElementById('root'))
