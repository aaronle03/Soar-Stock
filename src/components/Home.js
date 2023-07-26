import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div class="home">
            <div class="home-navbar">
                <Navbar></Navbar>
            </div>
            <div class="home-content-container">
                <h1>Hello</h1>
            </div>
        </div>
    );
}

export default Home;