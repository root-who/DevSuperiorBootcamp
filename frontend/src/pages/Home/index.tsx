import Footer from "components/Footer"
import NavBar from "components/HeaderNavBar"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <NavBar/>
            <div className="container mt-5">
                <div className="jumbotron mb-5">
                    <h1 className="display-4 mb-2">DSVendas</h1>
                    <p className="lead mb-2">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <Link className="mt-2 mb-5 btn btn-primary btn-lg" to="/dashboard">Acessar o DashBoard</Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home