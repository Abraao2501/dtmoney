import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransitionModalOpen, setisNewTransition] = useState(false);
  

  function handleOpenNewTransitionModal(){
    setisNewTransition(true);
  }

  function handleCloseNewTransitionModal(){
    setisNewTransition(false);
  }

  return ( 
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransitionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransitionModalOpen} 
        onRequestClose={handleCloseNewTransitionModal} 
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
} 