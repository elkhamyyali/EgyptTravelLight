import Layout from "@/components/organisms/Layout";
import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    // fontFamily: Roboto.style.fontFamily,
  },
  direction: "ltr",
});
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppCacheProvider {...props}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
            <ToastContainer />
        </ThemeProvider>
      </AppCacheProvider>
    </QueryClientProvider>
  );
}
