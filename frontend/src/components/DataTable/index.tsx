import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sales";
import { formatLocalDate } from "utils/formatData";
import { baseUrl } from "utils/requests";



function DataTable(){

    const [tableData , setTableData] = useState<SalePage>({
        first: true,
        last: true,
        totalPages: 0,
        totalElements: 0,
        number: 0,
    });

    function getDataFromServer(){
        axios.get(`${baseUrl}/sales?page=0&size=10&sort=date,desc`)
             .then((response)=>{
                    const data = response.data as SalePage;
                    const myContent = data.content;
                    const totalOfPages = data.totalPages;
                    const totalOfElements = data.totalElements;
                    const theNumber = data.number;
                    setTableData({
                                content:myContent,
                                 first:true, last:true, totalPages : totalOfPages,
                                 totalElements:totalOfElements, number:theNumber
                                 })
             })
    }

     useEffect(getDataFromServer,[]);

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
        </>
    )
}

export default DataTable;