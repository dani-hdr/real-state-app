import "../styles/globals.css";
import { Provider } from "react-redux";
import {ThemeProvider} from 'next-themes'
import Layout from '../components/layout'
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Provider store={store}>
        <ThemeProvider attribute="class">
        <Layout>
        <Component {...pageProps} />
        
        </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
