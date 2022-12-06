import { useEffect } from "react";
import './Initial.css';
import { FaSpinner } from 'react-icons/fa';

function Initial(props) {
    const { history } = props;
    useEffect(() => {
        setTimeout(() => {
           history.push('/home');
        }, 3000);
    }, [history]);

    return (
        <div className="welcome">
            <h1>Olá, Seja bem vindo ao portfólio de João Antônio</h1>
            <FaSpinner className='loading'/>
        </div>
    );
}

export default Initial;
