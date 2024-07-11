import { useState } from "react";  
 
const conteudos = [
  ["Componnets", "Functional", "Real Time"],
  ["Props", "State", "Function Callback"],
  ["Hooks", "Virtual DOM", "Agility"],
];


function NavigationTabs() {
  const [estadoAtual, setEstado] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>React - Js</h1>
          <p>Navigating between tabs with useState</p> 
        </header>
      </div>

      <div id="tabs">
        <nav>
          <button onClick={() => setEstado(0)}>React-One</button>{" "}
          <button onClick={() => setEstado(1)}>React-Two</button>{" "}
          <button onClick={() => setEstado(2)}>React-Three</button>{" "}
        </nav>
      </div>

      <div id="content">
        {/* Define uma lista não ordenada */}
        <ul>
          {conteudos[estadoAtual].map((value, index /* Mapeia o conteúdo da aba selecionada para uma lista de itens */) => (
              <li key={index}>
                {value}
              </li> /* Cada item de conteúdo é exibido em um elemento <li> */
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default NavigationTabs;