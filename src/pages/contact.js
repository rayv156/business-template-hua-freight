import React from 'react';
import 'bulma/css/bulma.min.css';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { graphql } from "gatsby";
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const Contact = ({data}) => {
  const { businessInfo, title, description } = data.site.siteMetadata;
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);

  return <>
      <Navbar businessInfo={businessInfo} title={title} description={description}/>
      <section className="section is-medium">
        <h1 className="title">Contact Us</h1>
        <h2 className="subtitle">
            We would love to address any questions you might have so feel free to leave a note or call us at {businessInfo.phoneNumber}!
        </h2>
</section>
<div className="container">

<form netlify-honeypot="bot-field" data-netlify="true" name="contact" method="POST">
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
<div className="field">
  <label htmlFor="name-input" className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Name" name="name" id="name-input"/>
  </div>
</div>

<div className="field">
  <label htmlFor="email-input" className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="Email" name="email" id="email-input"/>
  </div>
</div>

<div className="field">
  <label htmlFor="phone-input" className="label">Phone Number</label>
  <div className="control">
    <input className="input" type="tel" placeholder="Phone #" name="phone" id="phone-input"/>
  </div>
</div>

<div className="field">
  <label htmlFor="message-input" className="label">Message</label>
  <div className="control">
    <textarea className="textarea" id="message-input" placeholder="Ex:  I'm looking for a quote please call me back at ..." name="message"></textarea>
  </div>
</div>
<div className="field is-grouped">
  <div className="control">
   <button type="submit" className="button is-info">Submit</button>
  </div>
</div>
</form>

<iframe className="google-map" title="google map for HUA Freight" src={businessInfo.googleAddress} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>

</div>
<Footer />
</>;
};

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
        businessInfo {
          businessLogo
          phoneNumber
          googleAddress
        }
      }
    }
  }
`

export default Contact;