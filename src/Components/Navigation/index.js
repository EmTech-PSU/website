import React from 'react';
import { NavBrand, NavToggle, NavElement, NavLink } from './NavElements';
import EmTechLogo from '../../Assets/logos/emtechfinalv4.png';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavBrand
                src={EmTechLogo}
                alt="emtech logo"
                height="60px"
                width="60px"
            />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navContent">
                <ul className="navbar-nav ml-auto">
                    <NavElement>
                        <NavLink path="/about" text="About" />
                    </NavElement>
                    <NavElement>
                        <NavLink path="/labs" text="Labs" />
                    </NavElement>
                    <NavElement>
                        <NavLink path="/contact" text="Contact" />
                    </NavElement>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation; 