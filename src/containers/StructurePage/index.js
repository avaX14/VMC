import React, { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import structure from '../../images/organizaciona_struktura.svg';
import translate from 'i18n/translate';
import TeamMembers from 'components/TeamMembers/index';

const StructurePage = () => {
  return (
    <div className="structure-container">
      <ScrollAnimation animateIn="bounceInRight" className="goals-box">
        <div className="text-box-title">
          <h1>{translate('organisationStructure')}</h1>
          <hr className="text-box-title-line" />
        </div>
        <div className="goals-box-content structure-content">
          <div className="mt-4 mr-4 structure-image">
            <img src={structure}></img>
          </div>

          <div className="structure-branch">
            {structureMembers.map(element => (
              <div className=" structure-branch-members d-flex flex-wrap">
                <p className="structure-branch-title">{element.title}</p>

                {element.members.map(member => (
                  <div className="structure-branch-member">
                    <p className="structure-branch-member-name">
                      {member.name}
                    </p>
                    <p className="structure-branch-member-email">
                      {member.email}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      <TeamMembers></TeamMembers>
    </div>
  );
};

const structureMembers = [
  {
    title: translate('board1'),
    members: [
      {
        name: 'Ljubo Radenković',
        email: 'ljubisar@castingtrade.com'
      }
    ]
  },

  {
    title: translate('board2'),
    members: [{ name: 'Novičić Milisav ', email: 'office@unipromet.co.rs' }]
  },

  {
    title: translate('board3'),
    members: [
      { name: 'Vladan Čvrkić ', email: 'binmetal@eunet.rs' },
      { name: 'Nikola Egić', email: 'nikolaegic@bozic.rs' },
      { name: 'Slobodan Morača', email: 'moraca@uns.ac.rs' },
      { name: 'Dragan Kapičić', email: ' office@hlorogen.com ' },
      { name: 'Andrea Kiralj', email: 'office@berko.rs' },
      { name: 'Andrija Ekmedžić', email: 'andrija@aero.konelek.com' },
      {
        name: 'Slobodan Jovanović',
        email: 'slobodan.jovanovic@metalcinkara.co.rs'
      }
    ]
  },

  {
    title: translate('board4'),
    members: [
      { name: 'Zdravko Knežević', email: 'consact.yu@consact.com' },
      { name: 'Sven Carić', email: 'caricsven@open.telekom.rs ' },
      { name: 'Aleksandra Božić', email: 'office@gumil.rs' }
    ]
  },

  {
    title: translate('board5'),
    members: [
      { name: 'Dragan Bosilj', email: 'dragan.bosilj@komora.net' },
      { name: 'Pere Tumbas', email: 'ptumbas@ef.uns.ac.rs' },
      { name: 'Snežana Ćirić Kostić', email: 'cirickostic.s@mfkv.kg.ac.rs ' },
      { name: 'Mirko Gavrilović ', email: 'mirko.gavrilovic@sgs.com' },
      { name: ' Zlatan Šoškić', email: 'soskic.z@mfkv.kg.ac.rs' }
    ]
  },

  {
    title: translate('board6'),
    members: [{ name: 'Zoran Pekez', email: 'zpekez@vmc.rs' }]
  }
];

export default StructurePage;
