import DataTable from "components/DataTable/index";
import Footer from "./components/Footer/index";
import NavBar from "./components/HeaderNavBar/index";

function App() {
  return (
          <>
          <div className="container">
            <NavBar/>
            <DataTable/>
            {/* <h1 className="text-primary">Olá Mundo!</h1> */}
            
          </div>
          <Footer/>
          </>  
  );
}

export default App;
