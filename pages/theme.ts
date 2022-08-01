import { extendTheme } from "@chakra-ui/react"


const DefaultConfig ={
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
    }
}
export const DarkColors = {
    primary: '#000',
    secondary: '#fff',
    text: '#ff4081',
    headerGradient: 'linear(to-tr, #ff4081, #ff4081)',
}


export const DarkTheme = extendTheme({
 ...DefaultConfig,
    colors: {
        ...DarkColors,
    }
    
})

export const LightColors = {
    primary: '#ff4081',
    secondary: '#000',
    text: '#000',
}

export const LightTheme = extendTheme({
    ...DefaultConfig,
    colors: {
        ...LightColors,
    }
})