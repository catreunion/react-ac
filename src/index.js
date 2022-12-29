import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import App from "./App"
import "./index.css"

// create an instance of ApolloClient
// pass a configuration object to the constructor
const client = new ApolloClient({
  // FlyBy GraphQL API (created by Apollo)
  uri: "https://flyby-gateway.herokuapp.com/",
  // uri: "https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master",
  // create an instance of InMemoryCache for caching query results
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById("root"))

// wrap App in ApolloProvider and inject the client
// App can access the retrieve data via useQuery hook
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
