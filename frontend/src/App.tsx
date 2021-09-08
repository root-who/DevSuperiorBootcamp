import DonutChart from "./components/DonutChart/index";
import BarChart from "./components/BarChart/index";
import DataTable from "./components/DataTable/index";
import Footer from "./components/Footer/index";
import NavBar from "./components/HeaderNavBar/index";

function App() {
  return (
          <>
          <NavBar/>
          <div className="container">
            <h1 className="text-primary py-3">Dashboard de Vendas</h1>
            
            <div className="row px-3 mt-5">
              <div className="col-sm-6">
                <h5>Taxa de Sucesso (%)</h5>
                <BarChart/>
              </div>
              <div className="col-sm-6">
                <h5>Todas as Vendas</h5>
                <DonutChart/>
              </div>
              
              
            </div>       

            <DataTable/> 
          </div>
          <Footer/>
          </>  
  );
}

export default App;
