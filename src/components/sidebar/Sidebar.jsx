
import {UilSignOutAlt} from '@iconscout/react-unicons'

import './Sidebar.css'
import { SidebarData } from '../../data';

const Sidebar = () => {
    
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
                            <div key={index} className="menuItem">
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