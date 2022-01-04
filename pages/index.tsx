import Link from "next/link";
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";
import styles from '../styles/Formulario.module.css'

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(10)
  const [comPresente, setComPresente] = useState(8);
  return (
    <div>
        <div className={styles.formulario}>
          <div>
            <Cartao bgcolor='#c0392c'>
              <h1>Monty Hall</h1>
            </Cartao>
            <Cartao>
                <EntradaNumerica text='Quantidade Portas?' value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
            </Cartao>
          </div>
          <div>
            <Cartao>
            <EntradaNumerica text='Porta com Presente?' value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>

            </Cartao>
            <Cartao bgcolor='#28a085'>
              
              <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
                <h2 className={styles.link}>Iniciar</h2>
              </Link>
            </Cartao>
          </div>
        </div>
    </div>
  )
}