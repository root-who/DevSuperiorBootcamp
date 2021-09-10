import axios from 'axios';
import Chart from 'react-apexcharts';
import { baseUrl } from 'utils/requests';

type ChartData = {
    labels: string[];
    series:number[];
}

const DonutChart = () =>{

    let chartData : ChartData ={ 
        labels:[], 
        series:[]
    };

    axios.get(`${baseUrl}/sales/sumamount-by-seller`).then((response)=>{
            chartData = response.data;     
        })

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

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