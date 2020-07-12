import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import translate from 'i18n/translate';
import { Link } from 'react-router-dom';

const MembersPage = () => {
  return (
    <ScrollAnimation
      animateIn="bounceInLeft"
      className="goals-box members-container"
    >
      <div className="text-box-title">
        <h1>{translate('ourMembers')}</h1>
        <hr className="text-box-title-line" />
      </div>
      <h3 className="mb-5">zašto postati naš član</h3>
      <div className="members-container-text">
        <p className="mb-4">
          Klaster je oblik udruživanja koji doprinosi{' '}
          <span className="important-text">
            realizaciji zajedničkih aktivnosti
          </span>{' '}
          organizacija koje obavljaju iste ili slične poslove na određenom{' '}
          <span className="important-text">geografskom području</span>.
          Uzimajući u obzir izazove, probleme i potrebe metalskog sektora u
          Vojvodini našli smo da bi pristup razvoja putem uspostavljanja
          klastera bio efektivno i efikasno rešenje identifikovanih problema.
          <br></br>
          Garancija za ostvarivanje ciljeva{' '}
          <span className="important-text">VMC-a</span> je podška lokalnih i
          pokrajinskih vlasti AP Vojvodine, Vlade Republike Srbije preko
          Ministarstva ekonomije i regionalnog razvoja, Privredne Komore
          Vojvodine, VIP fonda - Fond za promociju investicija u Vojvodini i
          Regionalnog centra za standardizaciju i sertifikaciju. Preduzeća iz
          oblasti metalskog sektora postaju članovi VMC na osnovu
          <span className="important-text">sopstvenog interesa</span>. Ulaskom u
          VMC,{' '}
          <span className="important-text">
            svi članovi stiču pravo glasa kao i određene obaveze ali i prava
          </span>
          .
        </p>
        <p className="mb-4">
          <span className="important-text">
            Prava koja članovi klastera stiču:
          </span>{' '}
          <ul>
            <li>pravo da učestvuju u kreiranju programskih aktivnosti VMC</li>
            <li>
              pravo da koriste usluge klastera (pomoć i zaštitu u zemlji i
              inostranstvu, pristup izvorima finansiranja, usluge radionice
              klastera, usluge istraživačkog centra)
            </li>
            <li>
              pravo glasa (davanje predloge i mišljenja u vezi donošenja odluka,
              deklaracija i formiranja zaključaka VMC)
            </li>
            <li>
              pravo da pokreću inicijativu i učestvuju u realizaciji ciljeva VMC
            </li>
            <li>
              pravo da biraju i budu birani u upravljačka i radna tela VMC
            </li>
            <li>
              pravo da koriste poslovne i druge informacije koje su dostupne od
              strane klastera
            </li>
          </ul>
        </p>

        <p className="mb-4">
          <span className="important-text">Obaveze članova:</span>
          <ul>
            <li>
              da poštuju obaveze utvrđene Statutom i drugim opštim pravnim i
              drugim aktima klastera
            </li>
            <li>
              da aktivno doprinosi, kroz svoj rad i aktivnosti, na realizaciji
              zadataka i ciljeva klastera kao i da sačuva ugled članova klastera
              i ugled samog klastera
            </li>
            <li>
              obavezu da ne zloupotrebljava, u njihovim odnosima sa trećim
              licima, informacije o odlukama i aktivnostima klastera itd.
            </li>
          </ul>
        </p>
        <h3 className="mb-4 mt-5">Ko može biti član</h3>
        <p>
          Član klastera može biti <span className="important-text">svako</span>{' '}
          preduzeće <span className="important-text">iz metalskog sektora</span>
          , kao i pravna lica koja se nalaze u istom lancu vrednosti iz Srbije i
          inostranstva , koja su interesno povezana, a{' '}
          <span className="important-text">
            žele da povećaju svoju konkurentnost
          </span>{' '}
          na domaćem i stranom tržištu.
        </p>
      </div>
      <div className="become-member">
        {/* <Link to="../../files/prijava-za-clanstvo.doc" target="_blank" download> */}
        <h4 className="text-uppercase">Učlani se</h4>
        {/* </Link> */}
      </div>
    </ScrollAnimation>
  );
};

export default MembersPage;
