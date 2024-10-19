import { createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary:{
        main: '#81D8D0'
    },
    secondary: {
        main: '#646cff'
    }
}
})

function Theme (){
    return <ThemeProvider theme={theme}></ThemeProvider>
}

export default Theme