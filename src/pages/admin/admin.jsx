import React from "react";
import Navbar_Admin from "../../component/navbaradmin";
// import Tableadmin from "../../component/tableadmin";
import TablePeta from "../../component/tablepeta";

function Admin() {
    return (
        <> <div className="flex ">
            <Navbar_Admin />
            <TablePeta />
            </div>
        </>
    );
}
 
export default Admin;