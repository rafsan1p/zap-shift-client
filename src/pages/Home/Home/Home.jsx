import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Features from '../Features/Features';
import MerchantBanner from '../MerchantBanner/MerchantBanner';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <Services />
            <Brands />
            <Features />
            <MerchantBanner />
            <Reviews reviewsPromise={reviewsPromise} />
            <FAQ />
        </div>
    );
};

export default Home;