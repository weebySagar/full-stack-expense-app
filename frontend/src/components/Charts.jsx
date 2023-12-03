import React from 'react';
import Chart from "react-apexcharts";

const Charts = () => {
    
          
      const  series= [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }];
       const options= {
          chart: {
            
            type: 'line',
            zoom: {
              enabled: false
            },
            
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['transparent','transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            labels:{
                style:{
                    colors:"#ccc"
                }
            }
          },
          yaxis:{
            labels:{
                style:{
                    colors:["#ccc"]
                }
            }
          }
        }
       const seriesPie= [44, 55, 13, 43, 22];
        const optionsPie= {
          chart: {
            width: 'auto',
            type: 'pie',
            
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        
        }
  
  return (
    <div className='chart'>
        <div className="row">
            <div className="col col-lg-6">
                <div className="chart-container bg-7 rounded p-4 h-100">

                <Chart options={options} series={series} height='250px'/>
                </div>
            </div>
            <div className="col col-lg-6">
            <div className="chart-container bg-7 rounded p-4 h-100">
            <Chart options={optionsPie} series={seriesPie} type='pie' height='250px'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Charts