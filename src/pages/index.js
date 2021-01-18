import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="home" />
        <h1>My Blog</h1>
        <h2>Welcome to my story!</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
