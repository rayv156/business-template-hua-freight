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
          <p className="tile box">When it has to get there on time, you can count on us to deliver. More than freight brokers, we’re the reliable logistics partner you’ve been looking for. As a whole, we’re only as successful as the individuals and companies we serve, which is why we do everything we can to bring success to our shippers by leveraging our experience and expertise to reduce costs, maximize profitability, and streamline the supply chain. We take the guesswork and headache out of shipping, which gives decision-makers like you more time to focus on the core areas of your business.
          </p>
          <p className="tile box">

No matter the size, where it’s headed, or how fast it needs to get there, our knowledge combined with our extensive logistics network of flatbed trucks, dry vans, step decks, and lowboys allows us to meet your shipping needs without fail, and certainly without delay. We only work with the most reliable carriers in the nation, which gives our shippers the confidence and peace of mind of knowing their valuable freight is in the right hands.
          </p>
          <p className="tile box">
Count on us for all your shipping needs. No restrictions on size, location, or destination means your search for a freight broker is over. We accept single item shipments, less-than-truckload (LTL), dedicated full truckload (FTL), container freight, and more. Whatever you have and wherever it’s going, let us coordinate all of your shipping needs. Call us today to speak with one of our freight consultants, or request your free online freight quote to see how fast, affordable, and easy we make it to meet all of your shipping commitments.
        </p>
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
