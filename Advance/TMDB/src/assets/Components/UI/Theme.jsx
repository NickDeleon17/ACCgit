import { createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary:{
        main: '#81D8D0'
    },
    secondary: {
        main: '#F50057'
    }
}
})

function Theme ({ children }){
    return <ThemeProvider theme={theme}></ThemeProvider>
}

export default Theme