import Footer from "../component/footer";
import Hero from "../component/hero";
import Welcome from "../component/welcome";
import Login from "../component/login";
import React from "react";

function Loginpage() {
    return (
        <>
            <Hero />
      <Welcome />
            <Login />
            <Footer />
        </>
    );
}

export default Loginpage;
