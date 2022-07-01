


import { faFontAwesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
export default function sidebar({links,close}){

    return (

      <div className="sidebar" onClick={close}>
          { links.map(link =>(
              <Link to={link.path} className="sidebar-link active" href="#!" key={link.name}>
                  <FontAwesomeIcon icon={link.icon} />
                  {link.name}
              </Link>
            
            ))}
      
      </div>  
    )
}