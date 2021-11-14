import React, { FunctionComponent, useEffect, useState } from "react";

//Custom components
import ThemeContext from "Components/ThemeContext/ThemeContext";

//Material UI
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme } from "@mui/material/styles/createTheme";

const THEME_LIGHT = "light";
const THEME_DARK = "dark";

const lightTheme = createTheme({
    typography: {
        h1: {
            fontFamily: ['Lato', 'sans-serif'].join(',')
        },
        h2: {
            fontFamily: ['Lato', 'sans-serif'].join(',')
        },
        h3: {
            fontFamily: ['Lato', 'sans-serif'].join(',')
        },
        h4: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        h5: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        h6: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        body1: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        body2: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        }
    },
    palette: {
        primary: {
            main: "#ffb300"
        },
        secondary: {
            main: "#0097a7"
        }
    },
    spacing: 4,
    components: {
        MuiLink: {
            styleOverrides:{
                root: {
                    color: "#fff"
                }
            }
        }
    }
});

const darkTheme = createTheme({
    typography: {
        h1: {
            fontFamily: ['Lato', 'sans-serif'].join(',')
        },
        h2: {
            fontFamily: ['Lato', 'sans-serif'].join(',')
        },
        h3: {
            fontFamily: ['Lato', 'sans-serif'].join(',')
        },
        h4: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        h5: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        h6: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        body1: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        },
        body2: {
            fontFamily: ['Roboto Condensed', 'sans-serif'].join(',')
        }
    },
    palette: {
        primary: {
            main: "#ffc233",
        },
        secondary: {
            main: "#33abb8"
        }
    },
    spacing: 4,
    components: {
        MuiLink: {
            styleOverrides:{
                root: {
                    color: "#fff"
                }
            }
        }
    }
});

const ThemeProvider: FunctionComponent<any> = (props) => {

    const [theme, setTheme] = useState<any>(null);

    const setMuiTheme = (theme: any): void => {
        localStorage.setItem("theme", theme);
        if (theme === THEME_LIGHT) {
            setTheme(THEME_LIGHT);
        } else if (theme === THEME_DARK) {
            setTheme(THEME_DARK);
        } else {
            setTheme(THEME_LIGHT);
        }
    }

    const getMuiTheme = (): Theme => {
        if (theme === THEME_LIGHT) {
            return lightTheme;
        } else if (theme === THEME_DARK) {
            return darkTheme;
        } else {
            return lightTheme;
        }
    }

    useEffect(() => {
        const myCurrentTheme = localStorage.getItem("theme");

        if (!theme) {
            if (myCurrentTheme) {
                setTheme(myCurrentTheme)
            }
        }
    }, [theme])

    const themeState = {
        theme,
        setMuiTheme,
        getMuiTheme
    }

    const muiTheme = getMuiTheme();

    return (
        <ThemeContext.Provider value={themeState}>
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {props.children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

