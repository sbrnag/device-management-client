import React from 'react';
import './App.css';
import Header from "./components/Header";
import DeviceContextProvider from "./contexts/DeviceContextProvider";
import Device from "./components/Devices";

function App() {
  return (
    <React.Fragment>
      <Header />
      <DeviceContextProvider>
        <Device />
      </DeviceContextProvider>
    </React.Fragment>
  );
}

export default App;
