import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="navDiv">
                <img className="headerLogo" src={require("../../../images/airplane_icon.png")} alt="" />
                <p className="headerName">Air Traffic App</p>
            </div>
        </header>
    );
};

export { Header };