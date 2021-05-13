import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import { PrepearedStarShip } from '../../interfaces';
import './StarShip.scss';

interface Props {
  starShip: PrepearedStarShip;
}

export const StarShip: React.FC<Props> = ({ starShip }) => (
  <Card className="star-ship__card card">
    <CardBody>
      <CardTitle
        tag="h5"
        className="card__text"
        title={starShip.name}
      >
        {starShip.name}
      </CardTitle>
      <CardSubtitle
        tag="h6"
        className="mb-2 text-muted card__text"
        title={starShip.model}
      >
        {starShip.model}
      </CardSubtitle>
      <CardText
        className="card__text"
        title={starShip.starshipClass}
      >
        {starShip.starshipClass}
      </CardText>
      <CardText
        className="card__text"
        title={starShip.hyperdriveRating}
      >
        {starShip.hyperdriveRating}
      </CardText>
      <CardText
        title={starShip.passengers}
        className="card__text"
      >
        {starShip.passengers}
      </CardText>
      <CardText
        title={starShip.manufacturer}
        className="card__text"
      >
        {starShip.manufacturer}
      </CardText>
    </CardBody>
  </Card>
);
