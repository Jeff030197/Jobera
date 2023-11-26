import React, { useState } from "react";
import {
    BsCart3,
    BsGrid1X2Fill,
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsListCheck,
    BsMenuButtonWideFill,
    BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const [active, setActive] = useState("Dashboard");

    console.log(active);

    const handleItemClick = (item) => {
        setActive(item);
    };

    return (
        <aside
            id="sidebar"
            className={openSidebarToggle ? "sidebar-responsive" : ""}
        >
            <div className="sidebar-title">
                <div className="sidebar-brand">JOBERA</div>
                <span className="icon close_icon" onClick={OpenSidebar}>
                    X
                </span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="" onClick={() => handleItemClick("Dashboard")}>
                        <BsGrid1X2Fill className="icon" /> Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a onClick={() => handleItemClick("job-posted")}>
                        <BsFillArchiveFill className="icon" /> Job Posted
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a onClick={() => handleItemClick("job-posted")}>
                        <BsFillGrid3X3GapFill className="icon" /> Categories
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="" onClick={() => handleItemClick("job-posted")}>
                        <BsPeopleFill className="icon" /> Applicants
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a onClick={() => handleItemClick("job-posted")}>
                        <BsListCheck className="icon" /> Employer
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a onClick={() => handleItemClick("job-posted")}>
                        <BsMenuButtonWideFill className="icon" /> Reports
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a onClick={() => handleItemClick("job-posted")}>
                        <BsFillGearFill className="icon" /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
