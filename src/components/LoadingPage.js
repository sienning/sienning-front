import React, { Component } from 'react';
import '../App.css';

class LoadingPage extends Component {
    closeNav = () => {
        document.getElementById("myLoadingPage").style.height = 0;
    }

    render() {
        return (
            <div id="myLoadingPage" className="loading-overlay">
                <div className="loading-content">
                    Loading content
                </div>
            </div>
        );
    }
}

export default LoadingPage;