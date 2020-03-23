import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/">React Website</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>

                {this.props.children}

                <footer className="footer">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Your Website 2019</span>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                            <Link to="#">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li className="list-inline-item">
                            <Link to="#">Privacy Policy</Link>
                            </li>
                            <li className="list-inline-item">
                            <Link to="#">Terms of Use</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default PageWrapper;