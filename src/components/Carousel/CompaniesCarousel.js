import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import des from '../../images/desNoviSad.png';
import ictLogo from '../../images/ict-logo.png';
import binMetal from '../../images/bin-metal-cacak.png';
import axiomTech from '../../images/axiom-tech.png';
import Right from '../../images/RIGHT.png';
import Left from '../../images/LEFT.png';
import translate from 'i18n/translate';

export default function CompaniesCarousel() {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? <img src={Left}></img> : <img src={Right}></img>;
    return (
      <div className="carousel-arrow" onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    );
  };
  return (
    <div className="carousel">
      <div className="carousel-container">
        <h2>{translate('ourMembers')}</h2>
        <hr className="carousel-line" />
        <Carousel
          itemsToShow={3}
          renderArrow={myArrow}
          renderPagination={({ pages, activePage, onClick }) => {
            return <div></div>;
          }}
        >
          <div>
            <img src={des}></img>
          </div>
          <div>
            <img src={ictLogo}></img>
          </div>
          <div>
            <img src={binMetal}></img>
          </div>
          <div>
            <img src={axiomTech}></img>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
