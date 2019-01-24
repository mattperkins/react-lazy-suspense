import * as React from "react"
import useFetchSuspense from "./useFetchSuspense"

export default () => {
  // custom hook
  const data = useFetchSuspense("https://api-v3.mbta.com/routes", {
    query: { "filter[route_type]": "0,1" }
  })
  console.log(data)
  return <ul>
    {/* data.data because the API endpoint array is named data */}
    {data.data.map(route => (
      <li key={route.id}>{route.attributes.long_name}</li>
    ))}
  </ul>
}