import React from 'react'
import './styles/styles.scss';

import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { ItemsMenu } from './components/NavBarComponent/ItemsMenu';
import { MainComponent } from './components/MainComponent/MainComponent';
import { MenuComponent, ButtonMenu } from './components/MenuComponent/MenuComponent';

function App() {
  return (
    <>
    {/* ALL Menu Component */}
      
      <MenuComponent>
        <ButtonMenu label="e.Casilda" action={()=>{console.log("click e.Casilda")}}/>
        <ButtonMenu label="Menu" action={()=>{console.log("click Menu")}}/>
      </MenuComponent>

    {/* ALL "Nav Component" */}
      <NavBarComponent>
        <ItemsMenu 
          B_Color={"#ecabab"} 
          label="Comercios" 
          action={()=>{console.log("Click Comercios")}}
          />  
        <ItemsMenu 
          B_Color={"#b9d8b8"}
          label="Servicios" 
          action={()=>{console.log("Click Servicios")}}
          />
        <ItemsMenu 
          B_Color={"#b8d3d8"}
          label="Productos" 
          action={()=>{console.log("Click Productos")}}
          />
        <ItemsMenu 
          B_Color={"#d7b8d8"}
          label="Ofertas"   
          action={()=>{console.log("Click Ofertas")}}/>
      </NavBarComponent>

      {/* ALL "Main Component" */}

      <MainComponent /> 
    </>   
  );
}

export default App;
