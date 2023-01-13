import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";


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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransitionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransitionModalOpen} 
        onRequestClose={handleCloseNewTransitionModal} 
      />

      <GlobalStyle />
    </>
  );
} 