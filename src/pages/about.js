import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default () => (
  <Layout>
    <Head title="About" />
    <h1>About</h1>
    <h2>this is me!</h2>
    <Link to="/contact/">Contact me</Link>
  </Layout>
)
