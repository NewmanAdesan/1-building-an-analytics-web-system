
import {UilSignOutAlt} from '@iconscout/react-unicons'

import './Sidebar.css'
import { SidebarData } from '../../data';
import { useState } from 'react';

const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    
    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src="/logo.png" alt="" />
                <span>
                    Sh<span>o</span>px
                </span>
            </div>

            {/* menu */}
            <div className="menu">

                {
                    SidebarData.map(
                        (item, index) => (
                            <div 
                             key={index} 
                             className={selected===index ? "menuItem active" : "menuItem"}
                             onClick={() => setSelected(index) }
                             >
                                <div>
                                    <item.icon />
                                </div>
                                <span>{item.heading}</span>
                            </div>
                        )
                    )
                }
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    );
    
}
export default Sidebar