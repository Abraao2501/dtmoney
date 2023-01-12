import { Container } from './styles'

import incomeImg from '../../assets/entradas.svg'
import outComeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/cifrao.svg'

export function Summary(){
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