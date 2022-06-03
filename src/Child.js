import React, { useContext, useState } from 'react'
import { TransactionContex } from './transactionContex';

export default function Child() {

    let {transactions ,addTransaction,dispatch} = useContext(TransactionContex);
let [newdesc ,setdesc] = useState("");
let [newAmount ,setAmount] = useState(0);

const  getincome = ()=>{
    let income = 0;
    for(let i = 0;i<transactions.length;i++){
        if(transactions[i].amount > 0)
        income = income + transactions[i].amount
    }
    return income;
}


const getExpense = ()=>{
    let expense = 0;
    for(let i=0;i< transactions.length;i++){
        if(transactions[i].amount<0)
        expense += transactions[i].amount
    }
    return expense;
}



// deltrcord  =  (transobj)=>{
//     dispatchEvent({
//         type:"DELETE_TRANSACTION",
//         payload :transobj.id,
//     })
// }





const handleAddition = (event)=>{
    event.preventDefault();
    if(+newAmount === 0){
        alert("Please Enter Corect Value");
        return false;
    }
console.log(newdesc ,newAmount);
addTransaction({
    id: Math.round(Math.random() * 10000),
    amount:+newAmount,
    desc : newdesc,
    
})
setdesc("");
setAmount(0);
}


  return (
    <div className='contanior'>
      
<h1 className='text-center'>Expense Tracker</h1>
<h3> Your Balance <br/>  ${getincome()+getExpense()} </h3>



<div className='expense-containor'>
<h3> INCOME <br/> $ {getincome()}</h3>
<h3> EXPENSE<br/>${getExpense()} </h3>
</div>
<h3>History</h3>
<hr/>
<ul className='transaction-list'>

    {transactions.map((transObj ,indx)=>{
return(
    <li key={indx}> 
        <span>{transObj.desc}</span>
        <span>{transObj.amount}</span>
        <span><button onClick={()=>{


dispatch({
        type:"DELETE_TRANSACTION",
         payload :transObj.id   
  })
        }} >Delete</button></span>
    </li>
)

    })}
</ul>


<h3>Add New Transaction</h3>
<hr/>
<form onSubmit={handleAddition} className='Transaction-form'>
    <label> 
        Enter Discription <br/>
        <input value={newdesc} placeholder='Enter Discription' type="text" onChange={(evt)=>setdesc(evt.target.value)} required />
    </label>
    <br />
    <label> 
        Enter Amount <br/>
        <input value={newAmount} placeholder='Enter Amount' type="number" onChange={(evt)=>setAmount(evt.target.value)} required/>
    </label>
    <br />
    <input type="submit" value="Add Transaction" />
</form>
      
    </div>
  )
}
