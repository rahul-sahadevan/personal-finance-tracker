import React, { useState } from "react";
import { Radio, Select, Table } from "antd";

function TransactionTable({transaction}){
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
                    <Option value=''>All</Option>
                    <Option value='income'>Income</Option>
                    <Option value='expense'>Expense</Option>

                </Select>
        </div>
        <br></br>
        <div className="table-div">
            <div className="radio-div">
                <h2>My Transactions</h2>

                <Radio.Group
                    className="input-radio"
                    onChange={(e)=>setSortKey(e.target.value)}
                    value={sortKey}
                >
                    <Radio.Button value=''>No Sort</Radio.Button>
                    <Radio.Button value='date'>Sort By Date</Radio.Button>
                    <Radio.Button value='amount'>Sort By Amount</Radio.Button>

                </Radio.Group>

                <div className="btn-div">
                    <button className="btn">Export to CSV</button>
                    <label for="file-csv" className="btn btn-blue x">
                        Import from CSV
                    </label>
                    <input id="file-csv" type="file" accept=".csv" required style={{display:'none'}}></input>
                </div>
                
            </div>
            <Table className="table" dataSource={newTransaction} columns={columns} />;

        </div>



        </div>
      )

}

export default TransactionTable