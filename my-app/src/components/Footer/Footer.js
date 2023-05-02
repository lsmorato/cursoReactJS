import React, {useState} from 'react';
import './Footer.css';

function Footer(){
    const[counter, increaseCounter] = useState(0);
    const [lastClick, setLastClick] = useState(undefined);

    return(
        <Footer onClick={() => {
                increaseCounter(oldValue => oldValue + 1 )
                setLastClick(new Date());
                }
            }>
            <span>Quantidade de cliques realizados: {counter}</span>
            {lastClick && <p>Atualizado em: {lastClick.toLocaleString()}
            </p>}
        </Footer>
    )
}

export default Footer;