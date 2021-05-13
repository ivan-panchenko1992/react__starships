import React, { Fragment } from 'react';
import { PrepearedStarShip } from '../../interfaces';
import { StarShip } from '../starShip/StarShip';
import './StarShips.scss';

interface Props {
  starShips: PrepearedStarShip[];
}

export const StarShipsList: React.FC<Props> = ({ starShips }) => (
  <div className="star-ships">
    {
      starShips.map((starShip) => (
        <Fragment key={starShip.id}>
          <StarShip starShip={starShip} />
        </Fragment>
      ))
    }
  </div>
);
