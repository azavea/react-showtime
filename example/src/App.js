/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";

import Header from "./components/Header";
import About from "./components/About";
import theme from "./theme";

const sx = {
    header: {
        mb: 2,
    },
    about: {
        maxWidth: "70em",
        mx: "auto",
        mb: 3,
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header sx={sx.header} />
            <About sx={sx.about} />
        </ThemeProvider>
    );
}

export default App;
