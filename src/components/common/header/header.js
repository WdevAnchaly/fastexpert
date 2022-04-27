import React from 'react'
import { Link } from 'react-router-dom';
import { Headerall } from './styles.js'
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const head_location = location.pathname;
    return (
        <Headerall className='header-inerpage'>

            <header className={head_location !== "/" ? "header newHeader" : "header newHeader bg"}>
                <div className={head_location !== "/" ? "container step" : "container-fluid step"}>
                    <h1 className="logo">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/FastExpert_Icon.svg`} alt='Icon' />
                            <span>FastExpert</span>
                        </Link>
                    </h1>
                    <ul className="main-nav">
                        <li><a href="tel:8003190511">Call +1(800)319-0511</a></li>
                    </ul>
                </div>
            </header>
        </Headerall>
    )

}
export default Header;
