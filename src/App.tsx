import React from 'react';
import {Container, ThemeProvider} from "@mui/material";
import {theme} from "./styling/theme";
import Products from "./components/Products";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{backgroundColor: "#FEFEF8"}}><Products/></Container>
        </ThemeProvider>
    );
}

export default App;
