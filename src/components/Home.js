import React, {useState, useEffect} from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

// Functions
import { getTest } from '../functions/test';

function Home() {
    const [data, setData] = useState("Hello World!");

    useEffect(() => {
        getTest()
            .then((res) => {
                setData(res.message);
                console.log(res);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className="home">
            <Navbar />
            <div className="home-container">
                <h1>{data}</h1>
                <button>TEST</button>
            </div>
        </div>
    );
}

export default Home;