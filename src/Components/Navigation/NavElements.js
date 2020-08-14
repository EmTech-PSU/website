import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavBrand = (props) => {
    return (
        <Link to="/">
            <img
                src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}>
            </img>
        </Link>
    )
}
NavBrand.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string
}

export const NavToggle = () => {
    return (
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    )
}


export const NavElement = (props) => {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    )
}
NavElement.propTypes = { children: PropTypes.element }

export const NavLink = (props) => {
    return (
        <Link className="nav-link text-white" to={props.path}>
            {props.text}
        </Link>
    )
}
NavLink.propTypes = { path: PropTypes.string.isRequired, text: PropTypes.string.isRequired }