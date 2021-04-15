import React, { Component } from 'react';
import '../App.css';
import RouterPage from './RouterPage';
import Footer from './Footer';
import LoadingPage from './LoadingPage';

class Page extends Component {
    state = {
        isLoading: false,
    }

   
    openNav = () => {
        document.getElementById("myNav").style.display = "block";
    }

    openNav = () => {
        document.getElementById("myNav").style.display = "block";
    }

    render() {
        const {
            isLoading,
        } = this.state;
        return (
            <div>
                {
                    isLoading ?
                        <LoadingPage /> :
                        <>
                            <div className="page" >
                                <div className="navbar-menu">
                                    <a href="/" className="logo-site header-name">Léna ENG</a>
                                    <span
                                        style={{ cursor: "pointer", float: "right" }}
                                        onClick={this.openNav}
                                    >
                                        <img
                                            alt="hamburger"
                                            style={{ width: "40px" }}
                                            className="hamburger-svg"
                                            src="/img/hamburger-3.svg"
                                        />
                                    </span>
                                </div>
                                <RouterPage />
                            </div>
                            <Footer style={{ bottom: 0 }} />
                        </>
                }

            </div>
        )
    }
}

export default Page;