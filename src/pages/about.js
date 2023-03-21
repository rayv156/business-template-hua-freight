import React from 'react';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/Navbar';
import { graphql } from "gatsby";
import { faEnvelope, faPhone, faPaperPlane, faHouse } from '@fortawesome/free-solid-svg-icons'
import companyLogo from '../../src/images/hua_freight_logo.png'

const About = ({data}) => {
    const { businessInfo, title, description } = data.site.siteMetadata;
  return <div>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <section className="section is-medium">
        <h1 className="title">About Us</h1>
        <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={companyLogo} alt="HUA FREIGHT Logo" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">
      <FontAwesomeIcon icon={faPaperPlane} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
      110 E Houston St 8th Floor
      San Antonio, TX 78205
        
    </div>
    <div className="content">
      <a href={`tel:${businessInfo.phoneNumber}`}><FontAwesomeIcon icon={faPhone} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
      {businessInfo.phoneNumber}
    </a>
    </div>
    <div className="content">
      <a href="mailto: info@huafreight.com">
      <FontAwesomeIcon icon={faEnvelope} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
      info@huafreight.com
      </a>
    </div>
    <div className="content">
      <a href="/">
    <FontAwesomeIcon icon={faHouse} size="lg" style={{marginRight: '1rem', color: 'rgb(0,3,116)'}}/>
    www.huafreight.com
    </a>
    </div>
    <div className="content">
    MC#  1286577
    </div>
    <div className="content">
    USDOT# 3689522
    </div>
  </div>
</div>
</section>
        <Footer />
      </div>;
};

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        description
        businessInfo {
          businessLogo
          phoneNumber
        }
      }
    }
  }
`

export default About;
