import React from "react"
import Layout from "../components/layout"
import contactStyle from "./contact.module.scss"

export default () => (
  <Layout>
    <h1>Contact</h1>
    <div className={contactStyle.contactLink}>
      <p>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/faluoke" target="_blank">
          @faluoke
        </a>
      </p>
      <p>
        Or:{" "}
        <a href="mailto:faluoke@gmail.com?Subject=Hi%20from%20your%20blog%20site">
          Click here to email me
        </a>
      </p>
    </div>
  </Layout>
)
