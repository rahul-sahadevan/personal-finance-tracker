import React from 'react';
import { Row,Card } from 'antd';
import Button from '../Button';
import './style.css'
function Cards({showIncomeModal,showExpenseModal,income,expence,totalBalance}){

    return (
        <div className='my-row'>
            <Row>
                <Card className='my-card'>
                    <h2>Current Balance</h2>
                    <p>₹{totalBalance}</p>
                    <Button text={'Reset the Balance'} blue={true}/>
                </Card>
                <Card className='my-card'>
                    <h2>Total Income</h2>
                    <p>₹{income}</p>
                    <Button text={'Reset the Balance'} blue={true} onClick={showIncomeModal}/>
                </Card>
                <Card className='my-card' >
                    <h2>Total Expenses</h2>
                    <p>₹{expence}</p>
                    <Button text={'Reset the Balance'} blue={true} onClick={showExpenseModal}/>
                </Card>

            </Row>
        </div>
    )
}
export default Cards;