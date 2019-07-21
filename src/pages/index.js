import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default () => (
  <Layout>
    <Head title="Home" />
    <h1>Welcome!</h1>
    <h2>My name is Faluoke and I am a developer living in Salt Lake City.</h2>
    <Link to="/contact/">Contact me</Link>
  </Layout>
)
