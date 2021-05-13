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
      <CardTitle tag="h5">{starShip.name}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">{starShip.model}</CardSubtitle>
      <CardText>{starShip.starshipClass}</CardText>
      <CardText>{starShip.hyperdriveRating}</CardText>
      <CardText>{starShip.passengers}</CardText>
      <CardText>{starShip.manufacturer}</CardText>
    </CardBody>
  </Card>
);
