import React from 'react';
import { Row,Card } from 'antd';
import Button from '../Button';
import './style.css'
function Cards({showIncomeModal,showExpenseModal,income,expence,totalBalance}){
console.log(totalBalance)
    return (
        <div className='my-row'>
            <Row>
                <Card className='my-card current-card'>
                    <h2>Balance</h2>
                    <p>₹{totalBalance}</p>
                    
                </Card>
                <Card className='my-card'>
                    <h2>Income</h2>
                    <p>₹{income}</p>
                    <Button text={'Reset the Balance'} blue={true} onClick={showIncomeModal}/>
                </Card>
                <Card className='my-card' >
                    <h2>Expenses</h2>
                    <p>₹{expence}</p>
                    <Button text={'Reset the Balance'} blue={true} onClick={showExpenseModal}/>
                </Card>

            </Row>
        </div>
    )
}
export default Cards;