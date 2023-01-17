import { Container } from './styles'

import incomeImg from '../../assets/receitas.svg'
import outComeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/cifrao.svg'
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary(){
  
  const transactions = useContext(TransactionsContext);

  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>

        <strong>
          R$1000,00
        </strong>
      </div>
      
      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt="" />
        </header>

        <strong>
          - R$500,00
        </strong>
      </div>

      <div className='highlight'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>

        <strong>
          R$500,00
        </strong>
      </div>
    </Container>
  )
}