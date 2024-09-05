import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/AboutPage.css";
import Ricardo from "../images/1RICARDO.png";
import Vyncent from "../images/1VYNCENT.png";
import Try from "../images/1TREMON.png";
import Lourdes from "../images/1LOURDES.png";
import Juan from "../images/1JUAN.png";
import whatis from "../images/whatis.webp";


function AboutPage() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-sections text-center">
        <div className="hero-contents">
          <h1>We are SPARK</h1>
          <p className="lead">Be a Welcomer by volunteering, engaging your business, and more.</p>
        </div>
      </section>

      <section className="stats-section text-center py-5">
        <div className="container">
          <div className="row">
            <div  className="col-md-3s col-md-3 ">
              <h3>Welcome to Spark</h3>
              <p>your go-to platform for community service initiatives within the lively city of Charlotte. At Spark, we've built a digital hub dedicated to fostering a culture of giving back and igniting positive change. Our mission is clear yet impactful: we aim to unite individuals driven by passion with meaningful volunteer opportunities, ultimately creating a ripple effect of positive impact throughout our beloved city.

We firmly believe that every person possesses the capacity to make a difference, no matter the scale. Whether you seek to volunteer with a local charity, participate in community cleanup endeavors, or offer assistance to those in need, Spark offers a seamless and user-friendly experience to help you discover the ideal opportunity that resonates with your interests and availability.</p>
            </div>
            {/* <div className="col-md-3 col-md-3s col-md-3ss">
              <p><img className="whatis " src={whatis}/></p>
            </div> */}
          </div> 
        </div>
      </section>

      <section className="stats-sections stats-section text-center py-5">
        <div className="container">
          <h3 className="stats-title">Our Guiding Principles</h3>
          <div className="row">
            <div className="col-md-3">
              <h3>Empower</h3>
              <p>Encouraging individuals to take initiative, make decisions, and reach their full potential</p>
            </div>
            <div className="col-md-3">
              <h3>Collaborate</h3>
              <p>Promoting teamwork, communication, and cooperation to achieve shared goals and objectives.</p>
            </div>
            <div className="col-md-3">
              <h3>Sustain</h3>
              <p>Promoting environmentally conscious practices, responsible resource management, and a commitment to long-term well-being.</p>
            </div>
          
          </div>
          <div className="row">
            <div className="col-md-3">
              <h3>Engage</h3>
              <p>Engaging with the community, listening to their needs, and actively contributing to positive social impact and change.</p>
            </div>
            <div className="col-md-3 ">
              <h3>Innovate</h3>
              <p>Embracing creativity, exploring new ideas, and fostering a culture of continuous improvement and learning.</p>
            </div>
          
            
          </div>
        </div>
      </section>


      <section className="stats-section stats-sections text-center py-5">
        <div id="containers" className="container ">
          <h2 className="stats-title">Our Staff</h2>
          <div className="row">
          <Slider  {...setting}
  responsive={[
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]}>
            <div className="col-md-3  Members">
              <img className="Members-pic" src={Juan} alt="Juan"/>
              <h3>Juan Casilla</h3>
            </div>
            <div className="col-md-3 Members">
              <img className="Members-pic" src={Lourdes} alt="Lourdes"/>
              <h3>Lourdes Villa</h3>
            </div>
            <div className="col-md-3 Members">
              <img className="Members-pic" src={Ricardo} alt="Ricardo"/>
              <h3>Ricardo Pena</h3>
            </div>
            <div className="col-md-3 Members">
              <img className="Members-pic" src={Try} alt="Try"/>
              <h3>Tremon Armstron</h3>
            </div>
            <div className="col-md-3 Members">
              <img className="Members-pic" src={Vyncent} alt="Vyncent"/>
              <h3>Vyncent Harris</h3>
            </div>
          </Slider>
          </div>
        </div> 
      </section> 
{/* 
      <section className="stats-sections stats-section text-center py-5">
        <div className="container">
        <h3 className="stats-title">Our Staff</h3>
          <div className="row">
          <div className="col-md-3  Members">
              <img className="Members-pic" src={Juan} alt="Juan"/>
              <h3>Juan Casilla</h3>
            </div>
            <div className="col-md-3 Members">
              <img className="Members-pic" src={Lourdes} alt="Lourdes"/>
              <h3>Lourdes Villa</h3>
            </div>
          </div>
          <div className="row">
          <div className="col-md-3 Members">
              <img className="Members-pic" src={Ricardo} alt="Ricardo"/>
              <h3>Ricardo Pena</h3>
            </div>
            <div className="col-md-3 Members">
              <img className="Members-pic" src={Try} alt="Try"/>
              <h3>Tremon Armstron</h3>
            </div>
            <div className="col-md-3 Members">
              <img className="Members-pic" src={Vyncent} alt="Vyncent"/>
              <h3>Vyncent Harris</h3>
            </div>
          
            
          </div>
        </div>
      </section> */}



    </>
  );
}

export default AboutPage;