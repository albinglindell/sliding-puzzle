import Puzzle from '../components/Puzzle'
import { useLocation } from 'react-router-dom'

function Ingame() {
    const location = useLocation()
    let { rows, cols } = location.state ? location.state : { rows: 3, cols: 3 };

  return (
    <div className='ingameContainer'>
        <Puzzle rows={rows} cols={cols}/>
    </div>
  )
}

export default Ingame