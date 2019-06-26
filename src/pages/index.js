import React from "react"
import {Random} from 'react-animated-text'
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout >
    <SEO title="Home" />
    {/* <img src={Birthday}/> */}
    <div className="background">
    <Random
  text="HAPPY BIRTHDAY JASON!!"
  effect="jump"
  effectChange={2.0}
  effectDuration={0.3}
/>
<h2>Thanks for everything you do for the community!</h2>
</div>
  </Layout>
)

export default IndexPage
