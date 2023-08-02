import React from "react";



const Nav = () => {

    return( 

        <nav className="navbar">
            <ul className="navmenu">
                <li>
                    <span>펀드</span>
                    <ul>
                        <li className="submenu">
                            <span>세부</span>
                            <span>세부</span>
                            <span>세부</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>신탁</span>
                    <ul>
                        <li className="submenu">
                            <span>세부</span>
                            <span>세부</span>
                            <span>세부</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>예/적금</span>
                    <ul>
                        <li className="submenu">
                            <span>세부</span>
                            <span>세부</span>
                            <span>세부</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>대출</span>
                    <ul>
                        <li className="submenu">
                            <span>세부</span>
                            <span>세부</span>
                            <span>세부</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

    )
}

  
   
export default Nav