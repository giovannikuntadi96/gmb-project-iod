import React from "react";
import LookerStudioEmbed from "./component/LookerEmbed/LookerEmbed";
import Home from "./Home";
import './Dashboard.css'


function Dashboard() {
    return (
        <div style={{ width: '100%', height: '90vh' }}>
        <LookerStudioEmbed />
        <Home />
      </div>
    )
}

export default Dashboard;
