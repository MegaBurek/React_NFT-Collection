import { Theme } from "@mui/material/styles/createTheme";

export type ThemeContextType = {
    theme: string | undefined
    setMuiTheme: (theme: string) => void
    getMuiTheme: () => Theme
}
