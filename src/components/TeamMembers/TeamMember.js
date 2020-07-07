import React from 'react';

const TeamMember = ({ member }) => {
  console.log(member);
  return (
    <div className="team-members-member">
      <img src={member.image}></img>
      <h5>{member.name}</h5>
      <p>{member.title}</p>
      <p className="team-members-member-email">{member.email}</p>
    </div>
  );
};

export default TeamMember;
