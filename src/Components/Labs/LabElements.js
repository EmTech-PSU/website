import React from 'react';
import PropTypes from 'prop-types';

export const LabHeading = () => {
    return (
        <div className="jumbotron">
            <h4 className="display-4">EmTech&apos;s Labs</h4>
            <p classNamer="lead">
                EmTech explores a vairety of Labs that target technologies used in the field today
            </p>
            <hr className="my-4"></hr>
            <button className="btn btn-dark" href="#labSection"> Learn More </button>
        </div>
    )
};

export const LabSelection = (props) => {
    return (
        <div id="labSection" className="row d-flex justify-content-around flex-wrap">
            {props.children}
        </div>
    )
}
LabSelection.propTypes = { children: PropTypes.element };


export const LabSelectionCard = (props) => {
    return (
        <div className="card" style={{ maxWidth: '548px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.src} className="card-img" alt={props.alt} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.labName}</h5>
                        <p className="card-text">{props.labDesc}</p>
                        <a className="btn btn-sm btn-dark" href={props.anchorLink}>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


LabSelectionCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    anchorLink: PropTypes.string,
    labDesc: PropTypes.string,
    labName: PropTypes.string.isRequired
};