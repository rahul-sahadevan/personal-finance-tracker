
import React,{useEffect, useState} from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";

import AddExpence from "../components/Modals/addExpence";
import AddIncome from "../components/Modals/addIncome";

import { toast } from "react-toastify";

import { auth, db } from "../firebase";
import { addDoc,collection,query,where,getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import TransactionTable from "../components/TransactionTable";
import Chart from "../components/Charts";
import NoTransaction from "../components/NoTransactions";
import SideBar from '../components/SideBar'

function Dashboard(){
    const [user] = useAuthState(auth)
    const [transaction,setTransaction] = useState([]);
    const [isExpenseModalVisible,setisExpenseModalVisible] = useState(false)
    const [isIncomeModalVisible,setisIncomeModalVisible] = useState(false)
    const [loading,setLoading] = useState(false)

    const [income,setIncome] = useState(0)
    const [expence,setExpence] = useState(0)
    const [totalBalance,setTotalBalance] = useState(0)

    // functions to show and cancel the income and expense modals
    const showExpenseModal = ()=>{
        setisExpenseModalVisible(true)
        console.log('expense')
    }
    const showIncomeModal = ()=>{
        setisIncomeModalVisible(true)
        console.log('income')
    }
    const handleExpenseCancel = ()=>{
        setisExpenseModalVisible(false)
    }

    const handleIncomeCancel = ()=>{
        setisIncomeModalVisible(false)
    }
    const onFinish = (values,type)=>{
        const newTransaction = {
            type:type,
            date: (values.date).format('YYYY-MM-DD'),
            amount:parseInt(values.amount),
            tag:values.tag,
            name:values.name,
        }
        addTransaction(newTransaction)
    }

    // functiion to add the table values into the firestore---------
    async function addTransaction(trans,many){
        try{
             
            const docRef = await addDoc(
                collection(db,`users/${user.uid}/transactions`),
                trans
            )
            let newarr = transaction;
            newarr.push(trans)
            setTransaction(newarr)

            if(!many) toast.success('Transaction Added')
        }
        catch(e){
            console.log(e)
            if(!many) toast.error('Could not add transaction!')
            
        }
    }
    useEffect(()=>{
        fetchTransaction()

    },[user])

    // function to fetch the table data from the fire store ---------------------
    async function fetchTransaction(){
        setLoading(true)
        if(user){
            const q = query(collection(db,`users/${user.uid}/transactions`));
            const querySnapshot = await getDocs(q);
            let transactionsArray = [];
            querySnapshot.forEach((doc)=>{
                transactionsArray.push(doc.data())
            })
            setTransaction(transactionsArray)
            console.log(transactionsArray)
            toast.success('Transaction Fetched')
        }
        setLoading(false)
    }

    useEffect(()=>{
        calculateBalance()
    },[transaction])
    
    // function to calculate the income,expense,and current balance of the user---------------
    function calculateBalance(){
        let incomeTotal = 0;
        let expenceTotal = 0;
        console.log(transaction)
        transaction.forEach((trans)=>{
            console.log(trans)
            if(trans.type === 'income'){
                incomeTotal += trans.amount
                console.log(income)
            }
            else{
                expenceTotal += trans.amount;
                console.log(expence)
            }
            setIncome(incomeTotal)
            setExpence(expenceTotal);
            setTotalBalance(incomeTotal - expenceTotal)
        })

    }

    // sorting the transaction array----------------
    let sortedTransaction = transaction.sort((a,b)=>{
        
        return new Date(a.date) - new Date(b.date)
        
    })


    return (
        <div>
            
                <Header/>
            {
                loading ? (<p>Loding...</p>):
                (
                    <div className="nav-side">
                        <div className="side-bar2">
                            <SideBar/>

                        </div>
                        <div className="main-bar">
                            <Cards 
                                income={income}
                                expence={expence}
                                totalBalance={totalBalance}
                                showIncomeModal={showIncomeModal}
                                showExpenseModal={showExpenseModal} 
                            />
                            {transaction && transaction.length !==0 ? <Chart sortedTransaction={sortedTransaction}/> : <NoTransaction/>}
                            
                            <AddIncome
                                isIncomeModalVisible={isIncomeModalVisible}
                                handleIncomeCancel={handleIncomeCancel}
                                onFinish={onFinish}
                            />
                
                            <AddExpence
                                isExpenseModalVisible={isExpenseModalVisible}
                                handleExpenseCancel={handleExpenseCancel}
                                onFinish={onFinish}
                            />
                            <TransactionTable transaction={transaction} addTransaction={addTransaction} fetchTransaction={fetchTransaction}/>

                        </div>

                </div>
                )
            }
        </div>
    )
}
export default Dashboard