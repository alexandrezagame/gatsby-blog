import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"


const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact the author:</h1>
      <p>Checkout my Github: <Link to="https://github.com/alexandrezagame" target="_blank">Click here</Link></p>

    </Layout>
  )
}

export default ContactPage