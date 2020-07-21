import React from 'react';
import { ToConsole } from './PrintFromJS';
import { ToConsoleTS } from './PrintFromTS';
interface IMyObject {
  name: string,
  lastName: string | null | number,
  age?: number
}

function App() {
  // let degisken2: string = "Mehmet";
  // let degisken3: IMyObject;
  // degisken3 = {
  //   name: "Mehmet",
  //   lastName: null,
  // }
  ToConsole("Mehmet")
  ToConsole(29)
  ToConsole({ isOk: false })

  ToConsoleTS(20)
  ToConsoleTS(5)
  return (
    <div className="App">
      Hello TypeScript
    </div>
  );
}

export default App;
