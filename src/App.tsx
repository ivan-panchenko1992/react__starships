import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import getStarShips from './api/starShips'
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [starShips, setStarShips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getStarShips(page).then(starShipsFromServer => setStarShips(starShipsFromServer))
  }, [page] )

  return (
    <div className="App">
      <h1>StarShips:</h1>
      <div className="star-ships">

      </div>
      <Button
        type="button"
        onClick={() => setPage(prevPage => (prevPage - 1))}
      >
        Prev
      </Button>
      <Button
        type="button"
        onClick={() => setPage(prevPage => (prevPage + 1))}
      >
        Next
      </Button>
    </div>
  );
}

export default App;
