import React, { Fragment } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from '../../components/feed/Feed';
import HomeRightbar from '../../components/rightbar/HomeRightbar';
import "./home.css"
export default function Home() {
    return (
        <Fragment>
            <Topbar/>
            <div className="home-container">
                <Sidebar/>
                <Feed/>
                <HomeRightbar/>
            </div>    
        </Fragment>
    );
}
