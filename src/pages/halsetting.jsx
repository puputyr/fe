import React from "react";
import Settings from "../component/settingprofile";
import Navbar_User from "../component/navbaruser";

function Settingpage() {
     const halaman = "setting"
    return (
         
        <div className="flex">
            <Navbar_User halaman={halaman}  />
            <Settings />
        </div>
     
    );
}

export default Settingpage;