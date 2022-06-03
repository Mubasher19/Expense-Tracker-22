import './App.css';
import Child from './Child';
import { TransactionProvider } from './transactionContex';
// import { TransactionContex } from './transactionContex';

function App() {
  return (
    <div className="App">

<TransactionProvider>
       <Child/>
</TransactionProvider>

    </div>
  );
}

export default App;
