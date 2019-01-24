import * as React from "react";
import { Link } from '@reach/router'

export default () => <nav style={{ marginBottom: 30 }}>
  <Link to="/" style={{ marginRight: 10 }}>Home</Link>
  <Link to="/data" style={{ marginRight: 10 }}>Data</Link>
  <Link to="/calc">Calc</Link>
</nav>


