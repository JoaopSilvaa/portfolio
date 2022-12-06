import { useEffect } from "react";
import { RiEmotionSadLine } from "react-icons/ri";

function NotFound(props) {
    const { history } = props;
    useEffect(() => {
        setTimeout(() => {
           history.push('/home');
        }, 2000);
    }, [history]);

    return (
        <main>
          <h1>Erro 404 <RiEmotionSadLine /></h1>
          <p>Página não encontrada!</p>
          <p>Você será redirecionado para página inicial!</p>
        </main>
    );
}

export default NotFound;
