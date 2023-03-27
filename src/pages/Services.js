import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGavel,
  faBullseye,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Services We Offer</h2>
      <div className="services container">
        <div className="service-box">
          <div className="service-icon">
            <FontAwesomeIcon color="green" icon={faUser} size="4x" />
          </div>
          <div className="service-details">
            <h3>Market Making</h3>
            <p>
              At Contrarian Technologies, we offer market-making services to
              help our clients improve the liquidity of their tokens and coins.
              Our experienced team uses advanced algorithms to provide
              competitive prices for both buyers and sellers, which not only
              increases trading volumes but also improves the market's overall
              efficiency.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FontAwesomeIcon color="green" icon={faGlobe} size="4x" />
          </div>
          <div className="service-details ">
            <h3>Exchange Listing</h3>
            <p>
              At Contrarian Technologies, we offer comprehensive exchange
              listing services to help your crypto project gain visibility and
              liquidity. Our team works closely with top-tier exchanges to
              ensure a seamless and successful listing process, and we provide
              ongoing support to help you maximize your exposure and trading
              volumes.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FontAwesomeIcon color="green" icon={faBullseye} size="4x" />
          </div>
          <div className="service-details">
            <h3>Marketing &amp; PR</h3>
            <p>
              Contrarian Technologies provides comprehensive marketing and
              public relations services to help crypto projects gain visibility
              and attract a wider audience. Our team of experienced
              professionals creates customized marketing strategies tailored to
              the unique needs and goals of each project.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <FontAwesomeIcon color="green" icon={faGavel} size="4x" />
          </div>
          <div className="service-details">
            <h3>Legal Advisory</h3>
            <p>
              At Contrarian Technologies, we understand the importance of
              navigating the legal and regulatory landscape in the crypto
              industry. Our team of legal experts provides comprehensive legal
              advisory services to crypto projects, including onshore and
              offshore company registration, legal opinions, and licenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
