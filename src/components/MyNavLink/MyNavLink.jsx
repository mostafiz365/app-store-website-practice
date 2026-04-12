import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive}) => `${isActive && "text-purple-500 border-b-2 border-purple-500 bg-base-200"} pb-1.5`}>
            {children}
        </NavLink>
    );
};

export default MyNavLink;