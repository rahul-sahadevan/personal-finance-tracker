import React from 'react';
import { Line, Pie } from '@ant-design/charts';
import './style.css'

// chart component -------------------------
const Chart = ({sortedTransaction}) => {
  // getting transaction date and amount 
  const data = sortedTransaction.map((item)=>{
    return {date:item.date,amount:item.amount}
  })

  // getting the expense amount---------
  const spendingData = sortedTransaction.filter((item)=>{
    if(item.type === 'expense'){
      return {tag:item.tag,amount:item.amount}
    }
  })

 let finalSpending = [{tag:'food',amount:0},{tag:'education',amount:0},{tag:'office',amount:0}]

//  calculting the final spending -------------
 spendingData.forEach((item)=>{
  if(item.tag === 'food'){
    finalSpending[0].amount += item.amount
  }
  else if(item.tag === 'education'){
    finalSpending[1].amount += item.amount
  }
  else{
    finalSpending[2].amount += item.amount
  }
 })

//  chart configuration
  const config = {
    data:data,
    width: 700,
    autoFit: true,
    xField: 'date',
    yField: 'amount',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };
  
// pie chart configuration----------
  const spendingconfig = {
    data: Object.values(finalSpending),
    width:300,
    angleField:'amount',
    colorField:'tag'

  }


  let chart;
  let pieChart;

 

  return (
    <div className='chart-wrapper'>
      <div className='chart left-chart'>
        <h2>Financial Statistics</h2>
        <br></br>
        <Line className='line' {...config} onReady={(chartInstance) => (chart = chartInstance)} />
      </div>
      <div className='chart right-chart'>
        <h2>Total Spending</h2>
        <br></br>
        <Pie {...spendingconfig} onReady={(chartInstance) => (pieChart = chartInstance)} />
      </div>
    </div>
  );
};
export default Chart