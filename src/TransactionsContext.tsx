import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from './services/api'

interface TransactionContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void
}

interface Transaction { 
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createAt: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

interface TransactionProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider(props: TransactionProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() =>{
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  function createTransaction(transaction: TransactionInput){
    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions , createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}