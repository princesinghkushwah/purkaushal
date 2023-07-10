import React from "react";
import Header from "./Header";
import ourStory from '../images/ourStory.PNG'
import Footer from "../components/Footer";
import Menu from "./Menu";

function OurStory() {
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Header />
      <Menu/>
      <div >
        <img src="https://kinclimg7.bluestone.com/f_webp/static/resources/themes/bluestone/images/new/static/aboutus/banner-new.jpg"></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <label className="heading text-4xl lg:text-5xl lg:py-10" style={{ margin: 35}}>About Us</label>
        <div
          className="lg:w-4/5 w-full"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            
          }}
        >
          <div>
            <img
              className="hidden lg:block"
              style={{ width: "72%" }}
              src="https://bijoux.vamtam.com/wp-content/uploads/2020/10/03.jpg"
            />
          </div>
          <div className="lg:w-4/5 w-full px-5 lg:px-0" style={{  }}>
            <label className="lg:text-3xl text-2xl underline" style={{ }}>JEWELRY IS A LIFESTYLE</label>
            <br></br>
            <br></br>Welcome to the world of jewelry at PurKaushal. We are here
            to suggest the best masterpiece for your charming beauty which
            enhances the glow. We design a fine collection marking a natural
            evolution in the brand with a focus on elegantly crafted pieces
            designed to be both wearable and timeless.
            <br></br>
            <br></br>
            We are India’s leading destination for high-quality fine jewelry with strikingly exquisite designs. We have more than thousands realistic designs that you fall in love with!! We aim to revolutionize the fine jewelry and lifestyle segment in India with a firm focus on craftsmanship, quality and customer experience. Our stores have been instrumental in spreading the shine of PurKaushal and bringing us closer to you. With cutting edge innovation and latest technology, we make sure the brilliance is well reflected in all our jewelry. With world class experience, friendly staff and the dazzling beauty of exquisite jewelry, every store is a sparkling gem
          </div>
          
        </div>
        <div>
            <img
              className="block lg:hidden py-4"
              style={{  }}
              src="https://bijoux.vamtam.com/wp-content/uploads/2020/10/03.jpg"
            />
          </div>
      </div>
      <div className="lg:py-0 py-7"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",

        }}
      >
        <label className="heading lg:text-5xl text-3xl lg:py-10 lg:pt-20 py-4">The Bluestone Advantage</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            
          }}
        >
          <div>
            <img
              style={{ width: "100%" }}
              src={ourStory}
            />
          </div>

        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default OurStory;
