import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./Sidebar"
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
    const [showsSidebar, setShowSidebar] = useState(false)
    const location = useLocation()

    const links = [
        {
            name: "Homme",
            path: "/",
            icon: faHome,
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList

        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }


    ]
    function closerSidebar() {
        setShowSidebar(false)

    }

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo" >EpiF<span>oo</span>d</Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={ link.path === location.pathname ? "active" : "" } to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                    {/* <a href="#!"> Home </a>
               <a href="#!"> Recipes </a>
               <a href="#!"> Settings </a> */}


                </div>
                <div onClick={() => setShowSidebar(true)} className={showsSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>

                </div>
            </div>
            {showsSidebar && <Sidebar close={closerSidebar} links={links} />}



        </>
    )

}