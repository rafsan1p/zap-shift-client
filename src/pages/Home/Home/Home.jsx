import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Features from '../Features/Features';
import MerchantBanner from '../MerchantBanner/MerchantBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <Services />
            <Brands />
            <Features />
            <MerchantBanner />
        </div>
    );
};

export default Home;