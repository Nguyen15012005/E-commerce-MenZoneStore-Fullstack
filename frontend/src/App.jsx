import React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/navbar/Navbar";
import CustomeTheme from "./theme/CustomeThem";
import Home from "./customer/pages/home/Home";

const App = () => {
  return (
    <div>
      <ThemeProvider theme={CustomeTheme}>
        <div className="">
          <Navbar />
          <Home />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
