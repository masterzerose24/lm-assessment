import React from "react";
import FlagCard from './FlagCard'

export default function UserDetail(props) {
  const { details } = props;

  return (
    <div className="ui card">
      <div className="content header">
        <img className="ui avatar right spaced image" src={details.avatar} />
        {details.email}
        <div className="meta">{details.jobTitle}</div>
      </div>
      <div className="content">
        <div className="extra content">
          <FlagCard countryCode={details.countryCode}> </FlagCard>
          {details.content}
        </div>
      </div>
    </div>
  );
}
