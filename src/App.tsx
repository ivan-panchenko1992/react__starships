import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import getStarShips from './api/starShips';
import './App.css';
import { StarShipsList } from './components/starShipsList/StarShipsList';
import { PrepearedStarShip, StarShipFromServer } from './interfaces';

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [starShips, setStarShips] = useState<PrepearedStarShip[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(true);

  useEffect(() => {
    getStarShips(page)
      .then((starShipsFromServer: StarShipFromServer[]) => {
        if (!starShipsFromServer) {
          setIsLastPage(false);
          return;
        }
        const preperedStarships = starShipsFromServer
          .map<PrepearedStarShip>((starShip) => ({
            id: uuidv4(),
            name: starShip.name,
            model: starShip.model,
            starshipClass: starShip.starship_class,
            hyperdriveRating: starShip.hyperdrive_rating,
            passengers: starShip.passengers,
            manufacturer: starShip.manufacturer,
          }));

        setStarShips(preperedStarships);
        setIsLastPage(true);
      });
  }, [page]);

  return (
    <div className="App">
      <h1>StarShips:</h1>
      {page >= 2 && (
        <Button
          type="button"
          onClick={() => setPage((prevPage) => (prevPage - 1))}
        >
          Prev
        </Button>
      )}
      {isLastPage && (
        <Button
          type="button"
          onClick={() => setPage((prevPage) => (prevPage + 1))}
        >
          Next
        </Button>
      )}
      <StarShipsList starShips={starShips} />
    </div>
  );
};

export default App;
