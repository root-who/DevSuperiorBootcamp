import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sales";
import { formatLocalDate } from "utils/formatData";
import { baseUrl } from "utils/requests";





function DataTable(){

    const [page, setPage]= useState(0);
    const [tableData , setTableData] = useState<SalePage>({
        first: true,
        last: true,
        totalPages: 0,
        totalElements: 0,
        number: 0,
    });

    function getDataFromServer(){
        axios.get(`${baseUrl}/sales?page=${page}&size=10&sort=date,desc`)
             .then((response)=>{
                    const data = response.data as SalePage;
                    const myContent = data.content;
                    const totalOfPages = data.totalPages;
                    const totalOfElements = data.totalElements;
                    const theNumber = data.number;
                    const l = data.last;
                    const f = data.first;
                    setTableData({
                                content:myContent,
                                 first:f, last:l, totalPages : totalOfPages,
                                 totalElements:totalOfElements, number:theNumber
                                 })
             })
    }

    function onPageChange(pagina:number){
        setPage(pagina);
        console.log(pagina)
    }

     useEffect(getDataFromServer);

    return (
        <>
            <div className="table-responsive mt-5">
                <table className="table table-striped table-sm mb-2">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        tableData.content?.map((value, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{formatLocalDate(value.date, "dd/MM/yyyy")}</td>
                                    <td>{value.seller.name}</td>
                                    <td>{value.visitedClients}</td>
                                    <td>{value.dealsMaked}</td>
                                    <td>{value.amount.toFixed(2)}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-around mt-5 mb-2">
                <Pagination change={onPageChange} page={tableData} />
            </div>
        </>
    )
}

export default DataTable;