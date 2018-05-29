import React from 'react';
import "./Loader.css";

const Loader = () => {
    return (
        <div className="loaderHolder">
            <div className="lds-ellipsis">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Loader;

