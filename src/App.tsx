import React from 'react';
import { Printer } from "./Printer"
// import { PrinterJS } from './PrinterJS';
const App = () => {
  return (
    <div className="App">
      Hello TypeScript
      <hr />
      <Printer name="Ali" age={22} isActive={true}  />
      {/* <hr />
      <PrinterJS  /> */}
    </div>
  );
}

export default App;
