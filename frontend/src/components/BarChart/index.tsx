import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SellerSuccess } from 'types/sales';
import { baseUrl } from 'utils/requests';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type SeriesData = {
         name: string;
         data: number[];
}

type ChartData = {
    labels: {
        categories:string[]
    };
    series: SeriesData[]
}

export const round = (value: number, precision: number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const BarChart = () =>{
    const [chartData, setChartData] = useState<ChartData>({
            labels: {
                categories:[]
            },
            series:[
                {
                    name:"% Sucesso",
                    data:[]
                }
            ]
        })

    useEffect(()=>{
        getDatasFromServer()
    }, []);

    function getDatasFromServer(){
        axios.get(`${baseUrl}/sales/success-of-seller`)
            .then((response)=>{
                    const data = response.data as SellerSuccess[];
                    const mylabels = data.map(x => x.sellerName);
                    const myseries = data.map(x=> round((100*x.dealsMaked)/x.clientsVisited, 1))
                    setChartData({
                        labels: {
                            categories: mylabels
                        },
                        series:[
                            {
                                name:"% Sucesso",
                                data: myseries
                            }
                        ]
                    })
            })
    }
   

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    function spin(){
        if(chartData.labels.categories.length === 0 ){
            return( 
                <Box sx={{ display: 'flex', ml: "15%", mt: "10%"}}>
                    <CircularProgress />
                </Box>
            )
        }
        else return (
            <Chart
            options={{...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="240"
            />
        )
    }
    return (
        spin()
    )
}

export default BarChart;