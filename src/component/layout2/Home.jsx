import React from 'react';
import Header from './Header/Header';
import Heading from './Heading/Heading';
import LatestFeatures from './LatestFeatures/LatestFeature';
import Footer from './Footer/Footer';

export default function Home(){
    return(
        <div>
            <Header/>
            <Heading/>
            <LatestFeatures/>
            <Footer/>
        </div>
    )
}