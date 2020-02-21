import React, { Fragment } from "react";
import FlagCard from "./FlagCard";

export default function UserDetail(props) {
  const { details } = props;

  return (
    <Fragment>
      <div className="content header" style={{ display: 'flex' }}>
        <img className="ui avatar left spaced image" src={details.avatar} />
        <div className="details row">
          {details.email}
          <p className="meta">{details.jobTitle}</p>
        </div>
      </div>
    </Fragment>
  );
}
