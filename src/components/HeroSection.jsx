import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1>Making your consulting dream possible.</h1>
        <p>
          Elevate your <span className="highlight">consulting</span> preparation. Learn from McKinsey, BCG and Bain consultants to set you on the path to success
        </p>
<div className="hero-logos">
  <img
    src="https://static.wixstatic.com/media/7ffe3d_7f0db08cf7ad4070b86915a4a12f5f6a~mv2.png/v1/fill/w_129,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/McKinsey_%26_Company-Logo_wine.png"
    alt="McKinsey"
  />
  <img
    src="https://static.wixstatic.com/media/7ffe3d_dfc169ea92994e74bfcd27b1540cacf1~mv2.png/v1/fill/w_107,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BCG_MONOGRAM_edited_edited.png"
    alt="BCG"
  />
   <img
    src="https://static.wixstatic.com/media/7ffe3d_f838ce5c02504309bdbf623af714107a~mv2.png/v1/fill/w_99,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bain-company-logo-2DEF784400-seeklogo_com.png"
    alt="Bain & Company" />
   
</div>

      </div>
    </section>
  );
};

export default HeroSection;
