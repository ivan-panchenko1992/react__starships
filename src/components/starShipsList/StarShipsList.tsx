import React, { Fragment } from 'react';
import StarShip from '../starShip/StarShip';

const StarShipsList  = () => {
  return (
    {starShips.map(starShip => (
      <Fragment>
        <StarShip />
      </Fragment>
    ))}
  )
}

export default StarShipsList;
