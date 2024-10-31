import React from "react";
import DesktopNavbar from "./NavBar/Desktop";
import "./App.css";
import { createTheme } from '@mui/material/styles';


const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f50b5",
      },
    },
  });
  return (
    <>
      <DesktopNavbar />
    </>
  );
};

export default App;
