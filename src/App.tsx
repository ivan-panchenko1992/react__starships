import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner } from 'reactstrap';
import getStarShips from './api/starShips';
import './App.scss';
import { StarShipsList } from './components/starShipsList/StarShipsList';
import { PrepearedStarShip, StarShipFromServer } from './interfaces';

const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [starShips, setStarShips] = useState<PrepearedStarShip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getStarShips(page).then((result) => {
      if (!result.next) {
        setIsLastPage(false);
      }
      if (result.next) {
        setIsLastPage(true);
      }
      return result.results;
    })
      .then((starShipsFromServer: StarShipFromServer[]) => {
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
        setIsLoading(false);
      });
  }, [page]);

  return (
    <div className="App">
      <h1>StarShips:</h1>
      {page >= 2 && (
        <Button
          className="button"
          type="button"
          onClick={() => setPage((prevPage) => (prevPage - 1))}
        >
          Prev
        </Button>
      )}
      {isLastPage && (
        <Button
          className="button"
          type="button"
          onClick={() => setPage((prevPage) => (prevPage + 1))}
        >
          Next
        </Button>
      )}
      {isLoading
        ? (
          <div>
            <Spinner style={{ width: '8rem', height: '8rem' }} />
          </div>
        ) : (
          <StarShipsList starShips={starShips} />
        )}
    </div>
  );
};

export default App;
