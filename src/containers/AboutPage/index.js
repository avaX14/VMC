import React, { Fragment } from 'react';
import GoalsBox from 'components/GoalsBox/GoalsBox';
import team from '../../images/team1.svg';
import idea from '../../images/idea1.svg';
import goal from '../../images/goal1.svg';
import team2 from '../../images/team2.svg';
import translate from 'i18n/translate';

const AboutPage = () => {
  return (
    <Fragment>
      <GoalsBox
        title={translate('aboutUs')}
        image={team}
        className=""
        animation={'bounceInLeft'}
      >
        <span className="important-text">{translate('vmc')}</span>
        {translate('aboutUsPage1', { tag: <br /> })}
        <span className="important-text">{translate('rsedp2')}</span>
        {translate('aboutUsPage2')}
        <span className="important-text">
          {translate('economicDevelopment')}
        </span>
        {translate('aboutUsPage3')}
        <span className="important-text">{translate('partnership')}</span>
        {translate('aboutUsPage4')}
        <span className="important-text">{translate('fastDevelopment')}</span>
      </GoalsBox>
      <GoalsBox
        title="naša misija"
        image={idea}
        className="flex-row-reverse"
        animation={'bounceInRight'}
      >
        <span className="important-text">{translate('ourVision')}</span>
        {translate('ourMissionPage1')}
        <br></br>
        <br></br>{' '}
        <span className="important-text">{translate('ourMission')}</span>{' '}
        {translate('ourMissionPage2')}
        <br></br>
        <br></br> {translate('everyday')}
        <span className="important-text">{translate('competitiveness')}</span>
        {translate('ourMissionPage3')}
        <br></br>
        <br></br>{' '}
        <span className="important-text">{translate('infrastructure')}</span>
        {translate('ourMissionPage4')}
        <br></br>
        <br></br> {translate('ourMissionPage5')}
      </GoalsBox>
      <GoalsBox
        title="našI CILJEVI"
        image={goal}
        className=""
        animation={'bounceInLeft'}
      >
        {translate('contribution')}
        <span className="important-text">{translate('employment')}</span>
        {translate('ourGoals1')}
        <br></br>
        <br></br>
        <span className="important-text">{translate('concurrency')}</span>
        {translate('ourGoals2')}
        <br></br>
        <br></br>
        {translate('ourGoals3')}
        <span className="important-text">{translate('education')}</span>
        {translate('ourGoals4')}
        <br></br>
        <br></br> {translate('ourGoals5')}
        <span className="important-text">
          {translate('increaseEmployment')}
        </span>
        {translate('ourGoals6')}
      </GoalsBox>
      <GoalsBox
        title="Usluge i beneficije"
        image={team2}
        className="flex-row-reverse"
        animation={'bounceInRight'}
      >
        {translate('ourServices1')}
        <br></br>
        <br></br>
        {translate('ourServices2')}
        <span className="important-text">{translate('voteRight')}</span>{' '}
        {translate('ourServices3')}
        <span className="important-text">{translate('obligations')}</span>
        {translate('ourServices4')}
        <span className="important-text">{translate('rights')}</span> <br></br>
        <ul>
          <li>• pravo da učestvuju u kreiranju programskih aktivnosti VMC,</li>
          <li>
            {' '}
            • pravo da koriste usluge klastera (npr. pomoć i zaštitu u zemlji i
            inostranstvu, pristup raznim izvorima finansiranja, usluge radionice
            klastera, usluge istraživačkog centra itd),
          </li>
          <li>
            {' '}
            • pravo glasa (pravo da daju predloge i mišljenja u vezi donošenja
            odluka, deklaracija i formiranja zaključaka VMC),
          </li>
          <li>
            {' '}
            • pravo da pokreću inicijativu i učestvuju u realizaciji ciljeva
            VMC,
          </li>
          <li>
            {' '}
            • pravo da biraju i budu birani u upravljačka i radna tela VMC,
          </li>
          <li>
            {' '}
            • da budu redovno informisani o svim važnim pitanjima u vezi sa
            aktivnostima VMC (kao i da koriste poslovne i druge informacije koje
            su dostupne od strane klastera),
          </li>
          <li>
            {' '}
            • obavezu da poštuju obaveze utvrđene Statutom i drugim opštim
            pravnim i aktima klastera,
          </li>
          <li>
            {' '}
            • obavezu da aktivno doprinosi, kroz svoj rad i aktivnosti, na
            realizaciji zadataka i ciljeva klastera,
          </li>
          <li>
            {' '}
            • obavezu da sačuva ugled članova klastera i ugled samog klastera,
          </li>
          <li>
            {' '}
            • obavezu da ne zloupotrebljava, u njihovim odnosima sa trećim
            licima, informacije o odlukama i aktivnostima klastera.
          </li>
        </ul>
      </GoalsBox>
    </Fragment>
  );
};

export default AboutPage;
