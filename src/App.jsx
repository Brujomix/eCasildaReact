import React from 'react'
import './styles/styles.scss';

import { NavBarComponent } from './components/NavBarComponents/NavBarComponent';
import { ItemsMenu } from './components/NavBarComponents/ItemsMenuComponent';
import { MainComponent } from './components/MainComponents/ItemListContainer';
import { HeaderComponent, CartWidget, LogoBusiness } from './components/HeaderComponents/HeaderComponent';

function App() {
    return (
        <>
            {/* ALL Header Component */}
            <HeaderComponent>
                <LogoBusiness/>
                <CartWidget/>
            </HeaderComponent>

            {/* ALL "Nav Component" */}
            <NavBarComponent>
                <ItemsMenu
                    B_Color={"#ecabab"}
                    label="Comercios"
                    action={() => { console.log("Click Comercios") }}
                />
                <ItemsMenu
                    B_Color={"#b9d8b8"}
                    label="Servicios"
                    action={() => { console.log("Click Servicios") }}
                />
                <ItemsMenu
                    B_Color={"#b8d3d8"}
                    label="Productos"
                    action={() => { console.log("Click Productos") }}
                />
                <ItemsMenu
                    B_Color={"#d7b8d8"}
                    label="Ofertas"
                    action={() => { console.log("Click Ofertas") }} />
            </NavBarComponent>

            {/* ALL "Main Component" */}
            <MainComponent />
        </>
    );
}

export default App;
