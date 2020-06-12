import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>
        Welcome,
        {/* The value from the google spreadsheet */}
        {data.allKeyValue.edges[0].node.value}

      </p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allKeyValue(filter: {key: {eq: "username"}}) {
      edges {
        node {
          key
          value
        }
      }
    }
  }
`

export default IndexPage
