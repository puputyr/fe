import Content from "../component/tagline";
import Footer from "../component/footer";
import Hero from "../component/hero";
import Welcome from "../component/welcome";
import React from "react";


function LandingPage() {
    return (
        <>
            <Hero />
            <Welcome />
            <Content />
            <Footer />
            
        </>
    );
}

export default LandingPage;