import * as React from "react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { faPeopleArrowsLeftRight, faBusinessTime, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby";
import vanImage from '../../src/images/dry-van.png';
import flatbedImage from '../../src/images/flat-bed.png';
import ltlImage from '../../src/images/ltl-freight.png';

// markup
const IndexPage = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  return (<>
    <main className="parallax">
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <Hero businessInfo={businessInfo}/>
      <div class="content box">
  <h1>Our Services</h1>
  
      <div className="columns is-desktop">
      <div className="column">
      <div class="card" style={{width: 300, height: 260}}>
  <div class="card-image">
    <figure class="image" style={{display: 'flex', justifyContent: 'center'}}>
      <img src={vanImage} alt="Placeholder image" style={{width: '200px'}}/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
        <p class="title is-4">Dry Van</p>
    </div>

    <div class="content">
    Fully enclosed to protect shipments from outside elements.
    </div>
  </div>
</div>
</div>
<div className="column">
<div class="card" style={{width: 300, height: 260}}>
  <div class="card-image">
    <figure class="image" style={{display: 'flex', justifyContent: 'center'}}>
      <img src={flatbedImage} alt="Placeholder image" style={{width: '200px'}}/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
        <p class="title is-4">Flatbed</p>
    </div>

    <div class="content">
    Standard flatbeds to specialized equipment, we have you covered.
    </div>
  </div>
</div>
</div>
<div className="column">
<div class="card" style={{width: 300, height: 260}}>
  <div class="card-image">
    <figure class="image" style={{display: 'flex', justifyContent: 'center'}}>
      <img src={ltlImage} alt="Placeholder image" style={{width: '200px'}}/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
        <p class="title is-4">LTL</p>
    </div>

    <div class="content">
    Less-than-truckload shipping for smaller parcels.
    </div>
  </div>
</div>
</div>
</div>
</div>

<div class="content box">
  <h1>What Our Customers Say</h1>
  
      <div className="columns is-desktop">
      <div className="column">
      <div class="card" style={{width: 350}}>
  <div class="card-content">

    <p class="title">
    "As long as they've handled my freight deliveries, my shipments have been picked up and delivered on time without any issue. I recommend you trust the company I'm now proud to call my permanent logistics provider."
    </p>

    <p class="subtitle">
      Matt B.
    </p>
    <p class="subtitle">
      Customer
    </p>
  </div>
</div>
</div>
<div className="column">
<div class="card" style={{width: 350}}>
  <div class="card-content">

    <p class="title">
    "HUA FREIGHT has easy-to-use software that makes the on-boarding process simple. Uploading documentation and insurance documents was a breeze. Their factoring company was collaborative and received payment in less than 48 hours."
    </p>

    <p class="subtitle">
      Neo S.
    </p>
    <p class="subtitle">
      Carrier
    </p>
  </div>
</div>
</div>
<div className="column">
<div class="card" style={{width: 350}}>
  <div class="card-content">

    <p class="title">
    "I ship fragile and time-sensitive products to distributors around the county. These guys always make sure my goods reach their destination on time, and I haven't had a single damage claim yet. I wouldn't trust my shipments with anyone else now that I've experienced the best."
    </p>

    <p class="subtitle">
      Lisa E.
    </p>
    <p class="subtitle">
      Owner/Operator
    </p>
  </div>
</div>
</div>
</div>
</div>
      <Footer />
    </main>
    </>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        businessInfo {
          phoneNumber
          businessLogo
          name
          reviews {
            name
            message
            title
          }
        }
      }
    }
  }
`

export default IndexPage
