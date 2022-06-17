import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "'Nunito', sans-serif;",
        h4: {
            fontWeight: 800
        },
        h5: {
            fontWeight: 800
        },
        h6: {
            fontWeight: 800
        }
    },
    palette: {
        primary: {
            light: "#FBCB76",
            main: "#BF7417",
            dark: "#AE570E"
        },
        success: {
            light: "#C3F99F",
            main: "#84ED5E",
            dark: "#3EAA2F"
        },
        info: {
            light: "#6AF9FB",
            main: "#09CBF2",
            dark: "#0477AE"
        },
        warning: {
            light: "#FFF48A",
            main: "#FFE83D",
            dark: "#B7A11E"
        },
        error: {
            light: "#FFC39C",
            main: "#FF845B",
            dark: "#B73C2D"
        },
    },
    components: {
    },
});