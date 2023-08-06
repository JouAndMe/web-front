import React from "react";
import { useNavigate } from "react-router-dom"; // 수정된 import 문입니다
import '../styles/component.css';

const Nav = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용합니다

    return (
        <nav className="navbar">
            <ul className="navmenu">
                <li>
                    <span onClick={() => navigate('/fund')}>펀드</span>
                    <ul>
                        <li className="submenu">
                            <span onClick={() => navigate('/fund/details')}>세부</span>
                            <span onClick={() => navigate('/fund/details')}>세부</span>
                            <span onClick={() => navigate('/fund/details')}>세부</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span onClick={() => navigate('/trust')}>신탁</span>
                    <ul>
                        <li className="submenu">
                            <span onClick={() => navigate('/trust/details')}>세부</span>
                            <span onClick={() => navigate('/trust/details')}>세부</span>
                            <span onClick={() => navigate('/trust/details')}>세부</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span onClick={() => navigate('/deposit')}>예/적금</span>
                    <ul>
                        <li className="submenu">
                            <span onClick={() => navigate('/deposit/details')}>세부</span>
                            <span onClick={() => navigate('/deposit/details')}>세부</span>
                            <span onClick={() => navigate('/deposit/details')}>세부</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <span onClick={() => navigate('/loan')}>대출</span>
                    <ul>
                        <li className="submenu">
                            <span onClick={() => navigate('/loan/details')}>세부</span>
                            <span onClick={() => navigate('/loan/details')}>세부</span>
                            <span onClick={() => navigate('/loan/details')}>세부</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
