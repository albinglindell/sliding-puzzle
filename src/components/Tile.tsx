import { useEffect, useState } from 'react';
import { TileProps } from '../Models/IPuzzleModels';


const Tile = ({ value, onClick }: TileProps) => {
  const [tileColor, setTileColor]  = useState<boolean>(false)
  useEffect(()=>{
    if(value){
      if(value % 2 === 0){
        setTileColor(true)
      } else {
        setTileColor(false)
      }
    }
  },[onClick])
  return (
    <div className={ value ? (tileColor ? 'tileComponent white' : 'tileComponent red') : "tileComponent"}
      
      onClick={onClick}
    >
      {value ? value : ''}
    </div>
  );
};

export default Tile;
