import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sales";
import { formatLocalDate } from "utils/formatData";
import { baseUrl } from "utils/requests";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';





function DataTable(){
    const [page, setPage]= useState(0);
    const [tableData , setTableData] = useState<SalePage>({
        first: true,
        last: true,
        totalPages: 0,
        totalElements: 0,
        number: 0,
    });


    function onPageChange(pagina:number){
        setPage(pagina);
    }

     useEffect(()=>{
        axios.get(`${baseUrl}/sales?page=${page}&size=10&sort=date,desc`)
             .then((response)=>{
                    setTableData(response.data)
             })
     }, [page]);

     function spin(){
        if(tableData.totalElements === 0){
           return( 
                <Box sx={{ display: 'flex', ml: "40%", mt: "0", pt: "10%", pb: "5%"}}>
                    <CircularProgress />
                </Box>
            )}
            else return (
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

        return (
            spin()   
        )
     }



export default DataTable;