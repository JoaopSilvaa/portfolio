import { useEffect } from "react";

function Initial(props) {
    const { history } = props;
    useEffect(() => {
        setTimeout(() => {
           history.push('/home');
        }, 3000);
    }, []);

    return (
        <h1>Olá, Seja bem vindo ao portfólio de João Antônio</h1>
    );
}

export default Initial;
