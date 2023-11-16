import React from 'react';
import Banner from './Banner';
import WhoWeAre from './WhoWeAre';
import WhatClientsSay from './WhatClientSay';
import Consultation from './Consultation';
import Contact from './Contact';
import Footer from './Footer';
import Products from './Products';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <Products></Products>
            <Consultation></Consultation>
            <WhatClientsSay></WhatClientsSay>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;