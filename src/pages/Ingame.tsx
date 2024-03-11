import Puzzle from '../components/Puzzle'
import { useLocation } from 'react-router-dom'

function Ingame() {
    const location = useLocation()
    const { rows, cols } = location.state
  return (
    <div className='ingameContainer'>
        <Puzzle rows={rows} cols={cols}/>
    </div>
  )
}

export default Ingame