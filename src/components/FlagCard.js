import React, {Fragment} from 'react'

export default function FlagCard(props) {
  const { countryCode } = props;
  const displayType = 'flat';
  const size = 64;
  const imgSrc = `https://www.countryflags.io/${countryCode}/${displayType}/${size}.png`;
  return (
    <Fragment>
      <img src={imgSrc}/>
    </Fragment>
  )
}
