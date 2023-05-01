import React from "react";

function NavItem({Name},{Ref} ){
    return(    
        <li className="nav-item">
            <a className="nav-link" href="{Ref}">{Name}</a>
        </li>
    );
}

export default NavItem;