import { ThemeProvider } from "styled-components";
import theme from "lib/theme";
import GlobalStyle from "components/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
