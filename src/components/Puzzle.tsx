import { useState, useEffect } from 'react';
import Tile from './Tile';
import Confetti from './Confetti';
import { Link } from 'react-router-dom';
import { rowsAndCols } from '../Models/IPuzzleModels';




const Puzzle = ({rows, cols}: rowsAndCols) => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [finish, setFinish] = useState<boolean>(false);
  const size = rows 
  const tilesAmount = rows * cols -1

  useEffect(() => {
    setTiles(shuffleTiles());
  }, []);


  const isArraySorted = (arr: number[]): boolean => {
    if (arr.length < 2 || arr[arr.length - 1] !== 0 || arr[0] === 0) {
        setFinish(false)
        return false;
      }
      
      for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > arr[i + 1]) {
          setFinish(false)
          return false;
        }
      }
      
      setFinish(true)
      return true;

}


  const shuffleTiles = (): number[] => {
    const array = Array.from({ length: tilesAmount }, (_, i) => i + 1).concat(0);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    isArraySorted(array)

    return array;
  };

  const moveTile = (tileIndex: number) => {
    const emptyIndex = tiles.indexOf(0);
    if (isAdjacent(tileIndex, emptyIndex)) {
      const newTiles = [...tiles];
      [newTiles[tileIndex], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[tileIndex]];
      setTiles(newTiles);
      isArraySorted(newTiles)
    }
    
  };

  const isAdjacent = (index1: number, index2: number): boolean => {
    const row1 = Math.floor(index1 / size);
    const col1 = index1 % size;
    const row2 = Math.floor(index2 / size);
    const col2 = index2 % size;

    return (row1 === row2 && Math.abs(col1 - col2) === 1) || (col1 === col2 && Math.abs(row1 - row2) === 1);
  };

  return (
    <div className='puzzleComponent'>
    <div className='puzzle' style={{  gridTemplateColumns: `repeat(${rows}, 1fr)` }}>
      {tiles.map((tile, index) => (
        <Tile key={index} value={tile} onClick={() => moveTile(index)} />
      ))}
    </div>
    {finish && <div>
      <Confetti />
      <h1>You made it!</h1>
      </div>}
      <div className="buttonContainer">
      <button onClick={()=>setTiles(shuffleTiles())}>Shuffle</button>
      <Link to={"/"}>
      <button onClick={()=>setTiles(shuffleTiles())}>Go back</button>
      </Link>
      </div>
    </div>
  );
};

export default Puzzle;
