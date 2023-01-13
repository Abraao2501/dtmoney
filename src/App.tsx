import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import Modal from 'react-modal'

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

      <Modal 
          isOpen={isNewTransitionModalOpen} 
          onRequestClose={handleCloseNewTransitionModal}
        >
            <h2>Cadastrar Informações</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
} 