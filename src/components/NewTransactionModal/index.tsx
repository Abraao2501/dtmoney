import Modal from 'react-modal'
import { Container, TransctionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/fechar.svg'
import incomeImg from '../../assets/receitas.svg'
import outcomeImg from '../../assets/saidas.svg'
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
 
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const [type, setType] = useState('deposit');

  return ( 
      <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button 
          type='button' 
          onClick={onRequestClose} 
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar Modal" />
        </button>
      
        <Container>
          <h2>Cadastrar Informações</h2>

          <input 
            placeholder='Título' 
          />

          <input 
            type="number"
            placeholder='Valor' 
          />

          <TransctionTypeContainer>
            <RadioBox
              type='button'
              onClick={ () => { setType('deposit'); } }
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type='button'
              onClick={ () => { setType('withdraw'); } }
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransctionTypeContainer>

          <input 
            placeholder='Categoria'
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
  )
}