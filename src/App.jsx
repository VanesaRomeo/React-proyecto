import Footer from "./component/Footer/Footer";
import { Layout } from "./component/Layout/Layout";
import { Navbar } from "./component/Navbar/Navbar";
import Routes from './routes/Routes';


function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <Routes/>
        <Footer />
      </Layout>
    </>
  );
}

export default App;