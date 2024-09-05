// import "../css/Footer.css";
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Logo from '../images/SPARK.png';
// /////
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__addr">
//         <h1 className="footer__logo"><img src={Logo} alt="logo"/></h1>
        
//         <h2>Contact</h2>
        
//         <address>
//           5534 Somewhere In. The World 22193-10212<br />
          
//           <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
//         </address>
//       </div>
      

//      {/* /////// */}
//       <ul className="footer__nav">
        
// <<<<<<< Ricardo-About-Us-Page
//         <li className="nav__item nav__item--extra">
//           <h2 className="nav__title">SPARK</h2>
          
//           <ul className="nav__ul nav__ul--extra">
//             <li>
//               <a href="#">Avout Us</a>
//             </li>
//             <li>
//               <a href="#">Events</a>
//             </li>
//             <li>
//               <br/>
//             </li>
//           </ul>
//         </li>

//          <li className="nav__item nav__item--extra">
//           <h2 className="nav__title">What We Do</h2>
          
//           <ul className="nav__ul nav__ul--extra">
//             <li>
//               <a href="#">Locations</a>
//             </li>
//             <li>
//               <a href="#">Blog</a>
//             </li>
//             <li>
//               <br/>
//             </li>
//           </ul>
//         </li>
// =======
// //         <li className="nav__item nav__item--extra">
// //           <h2 className="nav__title">Technology</h2>
          
// //           <ul className="nav__ul nav__ul--extra">
// //             <li>
// //               <a href="#">Digital Signages</a>
// //             </li>
            
// //             <li>
// //               <a href="#">Digital Signage</a>
// //             </li>
            
// //             <li>
// //               <a href="#">Digital Signage</a>
// //             </li>
// //             <li>
// //               <a href="#">Digital Signage</a>
// //             </li>
            
   
// //           </ul>
// //         </li>
// >>>>>>> main
        
//         <li className="nav__item">
//           <h2 className="nav__title">Legal</h2>
          
//           <ul className="nav__ul">
//             <li>
//               <a href="#">Privacy Policy</a>
//             </li>
            
//             <li>
//               <a href="#">Terms of Use</a>
//             </li>
            
//             <li>
//               <a href="#">Sitemap</a>
//             </li>
//           </ul>
//         </li>

//         <li className="nav__item">
//           <h2 className="nav__title">Media</h2>

//           <ul className="nav__ul icons">
//             <li>
//             <Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link>
//             </li>

//             <li>
//             <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
//             </li>
                
//             <li>
//             <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
//             </li>
//           </ul>
//         </li>
//       </ul>
      
//       <div className="legal">
//         <p>&copy; 2019 Something. All rights reserved.</p>
        
       
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FooterLogo from '../images/SPARK.png';

function Footer() {
  return (
    <>
      <FooterContainer>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <LogoContainer>
                  <img src={FooterLogo} alt="Spark Logo" />
                </LogoContainer>
                <h6>About</h6>
                <p className="text-justify">Spark is a dynamic web platform that fosters volunteerism within organizations. Employees can easily sign up for events, while admins manage them through a dedicated dashboard. With Google Maps integration, Spark helps volunteers find and participate in local community activities effortlessly. Explore how Spark simplifies event management and boosts engagement in your organization’s volunteer efforts.</p>
              </div>

              <div className="col-xs-6 col-md-3 resources">
                <h6 className='header-h6'>Resources</h6>
                <ul className="footer-links">
                  <li><a href="https://www.passportjs.org/tutorials/password/prompt/">Passport.js</a></li>
                  <li><a href="https://fullcalendar.io/">FullCalendar API</a></li>
                  <li><a href="https://vercel.com/">DataBase powered by Vercel</a></li>
                  <li><a href="https://vercel.com/">Powered By Vercel</a></li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3 quick-links">
                <h6 className='header-h6'>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/login">LogIn</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by  
                  <a href="/"> Spark</a>.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <SocialIcons>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </SocialIcons>
              </div>
            </div>
          </div>
        </footer>
      </FooterContainer>
    </>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .site-footer {
    background-color: #98b66e;
    padding: 45px;
    font-size: 15px;
    line-height: 24px;
    color: white;
  }

  .site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5;
  }

  .site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }

  .site-footer a {
    color: white;
  }

  .site-footer a:hover {
    color: #F1ECE4;
    text-decoration: none;
  }

  .header-h6 {
    padding-left: 80px;
  }

  .footer-links {
    padding-left: 80px;
    list-style: none;
  }

  .footer-links li {
    display: block;
  }

  .footer-links a:hover {
    color: #F1ECE4;
    text-decoration: none;
  }

  .copyright-text {
    margin: 0;
  }

  img {
    max-width: 150px; /* Adjust the size as needed */
  }

  .resources, .quick-links {
    margin-top: 80px; /* Adjust this value to move the sections down */
  }

  @media (max-width: 991px) {
    .site-footer [class^=col-] {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767px) {
    .site-footer {
      padding-bottom: 0;
    }
    .site-footer .copyright-text {
      text-align: center;
    }
    .header-h6 {
      padding-left: 0;
    }

    .footer-links {
      padding-left: 0;
    }
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  text-align: center;
  margin-top: 10px;

  a {
    color: white;
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #F1ECE4;
  }
`;