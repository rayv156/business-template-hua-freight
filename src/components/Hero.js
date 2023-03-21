import React from 'react';
import companyLogo from '../../src/images/hua_freight_logo.png'

const Hero = () => {
  return <div>
      <section className="hero is-medium" >
            <div className="hero-body">
                <img className="company-logo" src={companyLogo} alt="HUA FREIGHT Logo"/>
            </div>
      </section>
  </div>;
};

export default Hero;
