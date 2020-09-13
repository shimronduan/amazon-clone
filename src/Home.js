import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for phone-call and Alexa voice control, Black"
            price="348.99"
            image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            title="JBL Bar 5.1 4K Ultra HD 5.1-Channel Soundbar with True Wireless Surround Speakers, Black (JBLBAR51BLK)"
            price="416.01"
            image="https://m.media-amazon.com/images/I/61QP89LUj9L._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="POWRUI Surge Protector, USB Wall Charger with 2 USB Charging Ports(Smart 2.4A Total)"
            price="14.57"
            image="https://m.media-amazon.com/images/I/61EqySCNupL._AC_UL320_.jpg"
            rating={3}
          />
          <Product
            title="Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts and Sports), Black"
            price="149.99"
            image="https://m.media-amazon.com/images/I/61THVCgtYxL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            title="Darksiders Genesis - Nephilim Edition - PS4 - PlayStation 4 Nephilim Edition"
            price="379.99"
            image="https://images-na.ssl-images-amazon.com/images/I/71gXjeOTLzL._AC_UL270_SR270,270_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Sony XBR-65A9G 65 Inch TV: Master Series BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility with HT-G700 3.1CH Dolby Atmos/DTS:X Soundbar"
            price="1299.99"
            image="https://m.media-amazon.com/images/I/61baGFdOXfL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
