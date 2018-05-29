import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navDiv">
                <img className="headerLogo" src={require("../../../images/airplane_icon.png")} alt="" />
                <p className="headerName">Air Traffic App</p>
            </div>
        </div>
    );
}

export default Header;