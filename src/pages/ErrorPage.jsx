import { useRouteError,Link } from "react-router"

import "./ErorPage.css"


function ErrorPage() {
    const error= useRouteError()
   if(error.status === 404){
    return <div className="error-page">
        <h1>{error.statusText}</h1>
        <img src="../../public/Animation - 1733980208810.gif" alt="" />
        <p>{error.status}</p>
        <Link to='/'>Home</Link>
    </div>
   }
    
    
  return (
    <div className="error-page">
        <h1>Oops" as an Error/Exception</h1>
        <Link to='/'>Home</Link>

    </div>
  )
}

export default ErrorPage