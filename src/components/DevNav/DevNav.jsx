import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

const DevNav = () => {
    return (
        <div
            style={{
                border: '2px solid red',
                fontSize: '20px',
                fontColor: 'white',
                position: 'fixed',
                right: '0',
                bottom: '0',
                zIndex: '100'
            }}
        >
            {routes.map((route) => {
                return (
                    <NavLink
                        style={{ color: 'white', display: 'flex' }}
                        to={route.path}
                    >
                        {route.path}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default DevNav;
