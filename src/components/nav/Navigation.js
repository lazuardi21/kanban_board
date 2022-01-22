import React, { useState } from 'react';
import SideMenu from './SideMenu';
import TopBar from './TopBar';


const Navigation = ({ setBackgroundImage }) => {

    const [openSideMenu, setOpenSideMenu] = useState(false);
    return (
        <div>
            <TopBar setOpenSideMenu={setOpenSideMenu} />
            <SideMenu
                openSideMenu={openSideMenu}
                setOpenSideMenu={setOpenSideMenu}
                setBackgroundImage={setBackgroundImage} />
        </div>
    );
}
 
export default Navigation;
