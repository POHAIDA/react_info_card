import React from "react";
import MainInfo from "./components/MainInfo";
import About from "./components/About";
import Footer from "./components/Footer";



export default function App(){
    return(
        <div className="container">
            <div className="card">
                <MainInfo />
                <About title="About" description="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
                <About title="Interests" description="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
                <Footer />
            </div>
        </div>
    )
}

