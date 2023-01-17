import { Container } from './styles'

import incomeImg from '../../assets/receitas.svg'
import outComeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/cifrao.svg'
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary(){
  
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce( (acc,transaction) => {
    if(transaction.type === 'deposit'){
        acc.deposits += transaction.amount
        acc.total += transaction.amount
    } else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
    }

    return acc;

  }, {
    deposits: 0,
    withdraw: 0,
    total:0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>

        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)
          }
        </strong>
      </div>
      
      <div>
        <header>
          <p>Saídas</p>
          <img src={outComeImg} alt="" />
        </header>

        <strong>
          -
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraw)
          }
        </strong>
      </div>

      <div className='highlight'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>

        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)
          }
        </strong>
      </div>
    </Container>
  )
}