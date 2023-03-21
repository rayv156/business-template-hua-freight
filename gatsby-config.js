require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `HUA FREIGHT`,
    description: "HUA FREIGHT, Import, Export, Broker, Transportation, San Antonio,Texas, TX",
    siteUrl: `https://www.yourdomain.tld`,
    businessInfo: {
        phoneNumber: '210-995-5165',
        businessLogo: '',
        googleAddress: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.086529715961!2d-98.4934688!3d29.4262673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f52c3e335c1%3A0xaa931eb0dee8ded4!2s110%20E%20Houston%20St%2C%20San%20Antonio%2C%20TX%2078205!5e0!3m2!1sen!2sus!4v1678066956203!5m2!1sen!2sus',
        name: 'HUA FREIGHT',
        reviews: [
          {
            name: 'Matt B',
            message: "As long as they've handled my freight deliveries, my shipments have been picked up and delivered on time without any issue. I recommend you trust the company I'm now proud to call my permanent logistics provider.",
            title: 'Customer'
          },
          {
            name: 'Neo S',
            message: "HUA FREIGHT has easy-to-use software that makes the on-boarding process simple. Uploading documentation and insurance documents was a breeze. Their factoring company was collaborative and received payment in less than 48 hours.",
            title: 'Carrier'
          },
          {
            name: 'Lisa E',
            message: "I ship fragile and time-sensitive products to distributors around the county. These guys always make sure my goods reach their destination on time, and I haven't had a single damage claim yet. I wouldn't trust my shipments with anyone else now that I've experienced the best.",
            title: 'Owner/Operator'
          }
        ]
    }
  },
  plugins: ["gatsby-plugin-netlify-cms", 
  "gatsby-plugin-mdx", 
  "gatsby-transformer-remark", 
  "gatsby-plugin-recaptcha", 
  "gatsby-plugin-netlify", 
  "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};