import Hero from "../component/hero";
import Content from "../component/tableadmin";
import Welcome from "../component/welcome";
import Partner from "../component/partner";
import Feature from "../component/feature";
import Footer from "../component/footer";
import React from "react";


function LandingPage() {
    return (
        <>
            <Hero />
            <Partner />
            <Welcome />
            <Feature />
            <Content />
            <Footer />
        </>
    );
}

export default LandingPage;