import React from 'react';
import zoranPekez from '../../images/zoran_pekez.png';
import mirjanaTomin from '../../images/mirjana_tomin.jpeg';
import vladimirPandurov from '../../images/vladimir_pandurov.jpeg';
import milicaJovicic from '../../images/milica_jovicic.jpeg';
import biljanaPekez from '../../images/biljana_pekez.png';
import danielaZivkovic from '../../images/daniela_zivkovic.jpeg';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    image: zoranPekez,
    name: 'Zoran Pekez',
    title: 'Menadžer klastera',
    email: 'zpekez@vmc.rs'
  },
  {
    image: mirjanaTomin,
    name: 'Mirjana Tomin',
    title: 'Stručni saradnik za izvoz, inovacije i operativni menadžment',
    email: 'mtomin@vmc.rs'
  },
  {
    image: vladimirPandurov,
    name: 'Vladimir Pandurov',
    title: 'Menadžer za poslovni razvoj',
    email: 'vpandurov@vmc.rs'
  },
  {
    image: milicaJovicic,
    name: 'Milica Jovičić',
    title: 'Saradnik na razvojnim projektima',
    email: 'mjovicic@vmc.rs '
  },
  {
    image: biljanaPekez,
    name: 'Biljana Pekez',
    title: 'Knjigovodstvo i nabavka',
    email: 'bpekez@vmc.rs'
  },
  {
    image: danielaZivkovic,
    name: 'Daniela Živković',
    title: 'Administrator',
    email: 'dcontos@vmc.rs'
  }
];

const TeamMembers = () => {
  return (
    <div className="members-box center-container">
      <div className="text-box-title">
        <h1>Menadzment Klastera</h1>
        <hr className="text-box-title-line" />
      </div>
      <div className="team-members goals-box-content ">
        {teamMembers.map(member => {
          return <TeamMember member={member}></TeamMember>;
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
