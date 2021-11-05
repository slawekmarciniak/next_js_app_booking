import MainLayout from "../components/layouts/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
