import React, { Suspense } from "react"
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './css/reset.css'
import './css/style.css'

const Lazy = React.lazy(() => import("./Lazy"))
const Loading = () => <h1>Loading...</h1>

// main ("ROOT") component 
class Root extends React.Component {

  render() {

    return (

      <div className="wrapper">
        <div className="row">

          <div className="col-12">
            <Suspense fallback={<Loading />}>
              <Lazy />
            </Suspense>
          </div>

        </div>
      </div>


    )// end return
  }// end render
}// end component

ReactDOM.render(<Root />,
  document.getElementById('root'))
registerServiceWorker()
