import React, { useEffect } from "react";
import Navbar_Admin from "../../component/navbaradmin";
import TablePeta from "../../component/tablepeta";
import TableAdmin from "../../component/tableadmin";
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    // Cek login atau token, jika tidak ada, redirect ke halaman login (dijalankan di useEffect awal)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
        console.log("🚀 ~ useEffect ~ token:", token)
    }, [])

    return (
        <> <div className="flex ">
            <Navbar_Admin />
            {/* <TablePeta /> */}
            <TableAdmin />
        </div>
        </>
    );
}

export default Admin;