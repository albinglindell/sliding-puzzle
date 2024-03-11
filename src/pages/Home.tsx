import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronUp, GoChevronDown } from "react-icons/go";


function Home() {
    const [rows, setRows] = useState<number>(3)
    const [cols, setCols] = useState<number>(3)

    const setRowsFunc = (val:string)=>{
            if(val === "increase"){
                if(rows !== 7){
                    setRows(rows + 1)
                }
            } else {
                if(rows !== 3){
                    setRows(rows - 1)
                }
            }
        
    }
    const setColsFunc = (val:string)=>{
            if(val === "increase"){
                if(cols !== 7){
                    setCols(cols + 1)
                }
            } else {
                if(cols !== 3){
                    setCols(cols - 1)
                }
            }
        
    }
  return (
    <div className='homeContainer'>
        <div className="buttoncontainer">
            <div className="rows">
                <h2>Rows</h2>
        <div className="increase">
            <GoChevronUp onClick={()=>setRowsFunc("increase")}/>
                <h2>{rows}</h2>  
            <GoChevronDown onClick={()=>setRowsFunc("decrease")}/>
        </div>
            </div>
            <h2 className='difficulty'>{rows} X {cols}</h2>
            <div className="cols">
                <h2>Columns</h2>
        <div className="decrease">
            <GoChevronUp onClick={()=>setColsFunc("increase")} />
            <h2>{cols}</h2>
            <GoChevronDown onClick={()=>setColsFunc("decrease")} />
        </div>
            </div>
        </div>

    <Link to={"/ingame"} state={{rows: rows, cols: cols}} >
        <button className='gameOnBtn'>Start game!</button>
    </Link>
    </div>
  )
}

export default Home