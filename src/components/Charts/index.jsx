import React from 'react';
import { Line, Pie } from '@ant-design/charts';
import './style.css'

const Chart = ({sortedTransaction}) => {
  const data = sortedTransaction.map((item)=>{
    return {date:item.date,amount:item.amount}
  })

  const spendingData = sortedTransaction.filter((item)=>{
    if(item.type === 'expense'){
      return {tag:item.tag,amount:item.amount}
    }
  })

 let finalSpending = [{tag:'food',amount:0},{tag:'education',amount:0},{tag:'office',amount:0}]

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

  const config = {
    data:data,
    width: 800,
    height: 400,
    autoFit: false,
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
      <div className='chart'>
        <h2>Financial Statistics</h2>
        <br></br>
        <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
      </div>
      <div className='chart'>
        <h2>Total Spending</h2>
        <br></br>
        <Pie {...spendingconfig} onReady={(chartInstance) => (pieChart = chartInstance)} />
      </div>
    </div>
  );
};
export default Chart