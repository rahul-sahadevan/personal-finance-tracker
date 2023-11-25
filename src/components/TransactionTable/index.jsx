import React, { useState } from "react";
import { Radio, Select, Table } from "antd";
import { parse, unparse } from "papaparse";
import { toast } from "react-toastify";
import './style.css'

function TransactionTable({transaction,addTransaction,fetchTransaction}){
    const {Option} = Select
    let [search,setSearch] = useState('');
    let[typeFilter,setTypeFilter] = useState('')
    let[sortKey,setSortKey] = useState('');
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Tag',
          dataIndex: 'tag',
          key: 'tag',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
      ];
      
      let newTransaction = transaction.filter((item)=> 
      item.name.toLowerCase().includes(search.toLowerCase())&&
      item.type.includes(typeFilter)
      ) 
      
      let sortedTransaction = newTransaction.sort((a,b)=>{
        if(sortKey === 'amount'){
            return a.amount - b.amount
        }
        else if(sortKey === 'date'){
            return new Date(a.date) - new Date(b.date)
        }
        else{
            return 0;
        }
      })

      // function to export the csv file---------------------------------

      function exportToCsv(){
        var csv = unparse({
          fields:['name','type','tag','date','amount'],
          data: transaction
        })

        var data = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        var csvURL = window.URL.createObjectURL(data);
        const tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'Transaction.csv');
        document.body.append(tempLink)
        tempLink.click();
        document.body.removeChild(tempLink)
       
      }

    // function to import csv file from the folder---------------

    function importFromCSV(event){

      event.preventDefault();
      try{
        parse(event.target.files[0],{
          header:true,
          complete: async function (result){
            console.log('result',result.data)
            
            for(const data of result.data){
              const newData = {...data,amount:parseFloat(data.amount)}
              await addTransaction(newData,true)
            }
          }
        })
        toast.success('All Transaction Added!')
        fetchTransaction()
        event.target.files - null
      }
      catch(e){
        toast.error(e)
      }

    }


      return (
        <div className="major-div">
        <div className="search-div">

            <div className="input-flex">
                <input type="text" placeholder="Search By Name" value={search} onChange={(e)=>setSearch(e.target.value)}></input>

            </div>
            <Select 
            className="select-type"
            onChange={(value)=> setTypeFilter(value)}
            value={typeFilter}
            placeholder='Filter'
            allowClear
            >
                <Option className='option' value=''>All</Option>
                <Option value='income'>Income</Option>
                <Option value='expense'>Expense</Option>

            </Select>
        </div>
        <br></br>
        <div className="table-div">
            <div className="radio-div">
                <h2 className="my-trans">My Transactions</h2>

                <Radio.Group
                    className="input-radio"
                    onChange={(e)=>setSortKey(e.target.value)}
                    value={sortKey}
                >
                    <Radio.Button className="radio-btn" value=''>No Sort</Radio.Button>
                    <Radio.Button className="radio-btn" value='date'>Sort By Date</Radio.Button>
                    <Radio.Button className="radio-btn" value='amount'>Sort By Amount</Radio.Button>

                </Radio.Group>

                <Select 
                  className='select-type select-2'
                  value={sortKey}
                  onChange={(value)=>setSortKey(value)}
                  placeholder='Sort'
                >
                  <Option value=''>No Sort</Option>
                  <Option value='date'>Sort By Date</Option>
                  <Option value='amount'>Sort By Amount</Option>

                </Select>

                <div className="btn-div">
                    <button className="btn" onClick={exportToCsv}>Export to CSV</button>
                    <label for="file-csv" className="btn btn-blue x">
                        Import from CSV
                      <input id="file-csv" type="file" accept=".csv" onChange={importFromCSV} required style={{display:'none'}}></input>
                    </label>
                </div>
                
            </div>
            <Table className="table" dataSource={newTransaction} columns={columns} />;

        </div>



        </div>
      )

}

export default TransactionTable