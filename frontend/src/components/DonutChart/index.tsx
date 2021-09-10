import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sales';
import { baseUrl } from 'utils/requests';

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

    return (
        <Chart
            options={{...options, labels : chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    )
}

export default DonutChart;