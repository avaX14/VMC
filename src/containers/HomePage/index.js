import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import messages from './messages';
import { LOGIN, REGISTER } from 'routes';
import Heading from '../../components/Heading/index';
import Textbox from 'components/TextBox/Textbox';
import Regions from 'components/Regions/Regions';
import CompaniesCarousel from 'components/Carousel/CompaniesCarousel';
import TextboxContainer from 'components/TextBox/TextboxContainer';
import NewsContainer from 'components/NewsContainer/NewsContainer';

function HomePage() {
  const { formatMessage } = useIntl();

  return (
    <div className="home-page">
      {/* <div>
        <Link to={LOGIN}>{formatMessage(messages.loginLink)}</Link>
        <Link to={REGISTER}>{formatMessage(messages.registerLink)}</Link>
      </div>
      <main>
        <h1>{formatMessage(messages.heading)}</h1>
        <h2>{formatMessage(messages.subheading)}</h2>
        <p>
          {formatMessage(messages.builtWithLove, {
            team: (
              <a key="team" href="https://www.vivifyideas.com/">
                Vivify Ideas
              </a>
            )
          })}
        </p>
      </main> */}
      <div className="basic-container">
        <div className="box-container center-container">
          <TextboxContainer></TextboxContainer>
          <NewsContainer></NewsContainer>
        </div>
      </div>
      <Regions></Regions>
      <CompaniesCarousel></CompaniesCarousel>
    </div>
  );
}

export default HomePage;
