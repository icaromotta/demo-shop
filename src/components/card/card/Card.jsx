import React from "react";
import "./Card.scss";

import visaLogo from "./visa-logo.png";
import CardImage from "./card-bg.svg";

export default (props) => (


  <div className="card">
    <div className="card-flag">
      <img src={visaLogo} alt="logo-visa" />
    </div>
    <div className="card-data">
      <div className="data-number">
        <span>{props.card.number}</span>
      </div>
      <div className="data-group">
        <span>{props.card.name}</span>
        <span>{props.card.expiration}</span>
      </div>
    </div>
  </div>

  // <div style={{width: '364px', height: '224px'}}>
  //   <img style={{position: 'absolute', zIndex: '-1'}} src={CardImage} alt=""/>
  //   <div style={{ position: 'ralative', width: '100%', height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '7%'}}>
  //     <img src={visaLogo} style={{width: '69px'}} alt="logo-visa" />
  //     <div style={{color: 'white'}}>
  //       <span style={{letterSpacing: '2.31px', color: '#FFF', textShadow: '0px 1px 2px #000000B3', opacity: '1', fontSize: '22px'}}>{props.card.number || '**** **** **** ****'}</span>
  //       <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textShadow: '0px 1px 2px #000000B3'}}>
  //         <span>{props.card.name || 'NOME DO TÍTULAR'}</span>
  //         <span>{props.card.expiration || '00/00'}</span>
  //       </div>
  //     </div>
  //   </div>
  // </div>

);
