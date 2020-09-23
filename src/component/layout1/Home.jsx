import React from 'react';
import Navbar from './Navbar';
import Heading from './Heading';
import Footer from './Footer';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <Navbar/>
            <Heading/>
            <Footer/>
        </div>
    );
}

export default Home;