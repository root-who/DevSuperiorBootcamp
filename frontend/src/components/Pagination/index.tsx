import { SalePage } from "types/sales";

type Props = {
    page : SalePage;
    change: Function
}



function Pagination ({page, change} : Props){

    function lastpage(final:boolean){
        if(final){
            return(
                <li className="page-item disabled">
                    <button className="page-link">Próxima</button>
                </li>
            )
        }return(
            <li className="page-item">
                <button onClick={()=> change(page.number+1)} className="page-link">Próxima</button>
            </li>
        )
    }

    function firstpage(final:boolean){
        if(final){
            return(
            <li className="page-item disabled">
                <button className="page-link">Anterior</button>
            </li>
            )
        }return(
            <li className="page-item">
                <button onClick={()=> change(page.number-1)}  className="page-link">Anterior</button>
            </li>
        )
    }

    return(
        <>
            <div className="row d-flex justify-content-center">
                <nav>
                    <ul className="pagination">
                        {firstpage(page.first)}
                        <li className="page-item disabled">
                            <span className="page-link">{page.number + 1}</span>
                        </li>
                        {lastpage(page.last)}
                    </ul>
                </nav>
            </div>  
        </>
    )
}
export default Pagination;