import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from './services/api'

interface TransactionContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
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

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date()
    });

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
   }

  return (
    <TransactionsContext.Provider value={{ transactions , createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  )
}