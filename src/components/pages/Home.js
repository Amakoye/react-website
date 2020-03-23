import React, { Component } from 'react'
import Header from '../common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../common/Services';
import Portfolio from '../common/Portfolio';
import Team from '../common/Team';

class Home extends Component {
    render() {
        return (
            <div>
                 <Header
                    title="Welcome to our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                 />

                 <Services/>
                 <Portfolio/>
                 <Team/>
            </div>
        )
    }
}

export default Home
