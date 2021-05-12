import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';


const StarShip = ({ starShip }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{starShip.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{starShip.model}</CardSubtitle>
          <CardText>{starShip.starship_class}</CardText>
          <CardText>{starShip.hyperdrive_rating}</CardText>
          <CardText>{starShip.passengers}</CardText>
          <CardText>{starShip.manufacturer}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default StarShip;