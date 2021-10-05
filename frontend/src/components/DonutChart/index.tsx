import axios from 'axios';
import { useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sales';
import { baseUrl } from 'utils/requests';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () =>{

    const [chartData, setChartData] = useState<ChartData>({labels: [], series:[]});
    
    useEffect(() =>{
        axios.get(`${baseUrl}/sales/sumamount-by-seller`)
                .then((response)=>{
                    const data = response.data as SaleSum[];
                    const mylabels = data.map(x=>x.sellerName);
                    const myAmount = data.map(x => x.sumAmountSale)
                    setChartData({labels : mylabels, series: myAmount})
                })
    }, []);

    const options = {

        legend: {
            show: true
        }
    }

    function spin(){
        if(chartData.labels.length === 0){
            return( 
                <Box sx={{ display: 'flex', ml: "15%", mt: "10%"}}>
                    <CircularProgress />
                </Box>
            )
        }else return <Chart
            options={{...options, labels : chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />

        
    }

    return (
        spin()
    )
}

export default DonutChart;