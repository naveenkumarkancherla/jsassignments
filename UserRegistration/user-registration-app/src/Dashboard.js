import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
    const [suc, setSuc] = useState("Loading...");
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;

        axios.get('http://localhost:3000/dashboard')
            .then(res => {
                console.log("dashboard: " + res.data);
                if (res.data === "Success") {
                    setSuc("Succeeded OK");
                } else {
                    setSuc("Failed to load dashboard");
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err);
                setSuc("Failed to load dashboard");
                navigate('/');
            });
    }, [navigate]);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{suc}</p>
        </div>
    );
}

export default Dashboard;
