import { getQuote } from "./context/GlobalActions"

import { useContext } from "react"
import GlobalContext from "./context/GlobalContext"



function App() {
  const {quote, dispatch} = useContext(GlobalContext)
  const handleClick = async ()=>{
    const data = await getQuote()
    dispatch({
      type:"get-data",
      payload:data
    })
  }
  
  return (

      
        <div className=" container card w-50 mt-5 m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="card-header h4 text-success">
        Random Quote Generator
      </div>
      <div className="card-body">
        <h5 className="card-title"> {quote.content} </h5>
        <p className="card-text float-end ">{quote.author} </p>
        {/* <p className="card-text">{quote.tags} </p> */}
        <button className="btn btn-primary mt-5 align-center" onClick={()=>handleClick()}    > Get More </button>
      </div>

    </div>
      
    


  )
}

export default App