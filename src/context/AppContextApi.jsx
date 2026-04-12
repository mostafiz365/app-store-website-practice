import React, { createContext, useState } from 'react';

export const AppContext = createContext();


const AppContextApi = ({children}) => {

    const [installApp, setInstallApp] = useState([]);
    const handleInstallBtn = (selectedApp) => {
            setInstallApp([...installApp, selectedApp]);
    }

    const data= {
        handleInstallBtn,
        installApp,
        setInstallApp
    }

    return (
        <AppContext value={data}>
            {children}
        </AppContext>
    );
};

export default AppContextApi;