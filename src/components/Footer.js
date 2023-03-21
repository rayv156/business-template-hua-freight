import React from 'react';

const Footer = () => {
  return <div>
      <footer className="footer">
  <div className="columns">
      
    <div className="column">

      <h4 className="bd-footer-title 
                 has-text-weight-medium
                 has-text-left">
        HUA FREIGHT
      </h4>
  
    </div>

    <div className="column">
      <h4 className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify">
        Explore
      </h4>

      <p className="bd-footer-link">
         <a href="/">
          <span className="icon-text">
            <span>Home</span>
          </span>
         </a>
          <br />
          <a href="/about">
              <span className="icon-text">
                <span>About</span>
              </span>
            </a>
          <br />
          <a href="/contact">
              <span className="icon-text">
                <span>Contact Us</span>
              </span>
          </a>
      </p>
  
    </div>

    <div className="column">
      <h4 className="bd-footer-title
                 has-text-weight-medium
                 has-text-justify">
        Contact us
      </h4>
  
      <p className="bd-footer-link">
          <a href="mailto: info@huafreight.com">
              <span className="icon-text">
                <span>Email</span>
              </span>
            </a>
          <br />
          <a href="tel:210-995-5165">
              <span className="icon-text">
                <span>Call Us</span>
              </span>
            </a>
          <br />
          <a href="/contact">
              <span className="icon-text">
                <span>Message Us</span>
              </span>
            </a>
      </p>
    </div>
    </div>
    <div className="content has-text-centered">
    <img alt="American Flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" style={{marginRight: '1rem', width: '40px'}}></img>
    </div>
    <div className="content has-text-centered">
    <p>
      Created by <a href="https://rayvelasquez.netlify.app/">Ray Velasquez</a>. &#169; 2023.
    </p>
  </div>
</footer>
  </div>;
};

export default Footer;
