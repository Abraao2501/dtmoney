import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import { TransactionsContext } from '../../TransactionsContext'

import closeImg from '../../assets/fechar.svg'
import incomeImg from '../../assets/receitas.svg'
import outcomeImg from '../../assets/saidas.svg'

import { Container, TransctionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
 
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreatNewTransaction(event: FormEvent){
    event.preventDefault();

    createTransaction({
     title,
     amount,
     category,
     type
    })
  }

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
      
        <Container onSubmit={handleCreatNewTransaction}>
          <h2>Cadastrar Informações</h2>

          <input 
            placeholder='Título' 
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type="number"
            placeholder='Valor' 
            value={amount}
            onChange={event => setAmout(Number(event.target.value))} 
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
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
  )
}