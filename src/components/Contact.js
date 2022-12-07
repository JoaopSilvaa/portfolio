import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useAlert } from 'react-alert';
import './Contact.css';

function Contact() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const alert = useAlert();

  const handleChange = ({ target }) => {
      const { name, value } = target;
      if (name === 'title') {
          setTitle(value);
      }
      if (name === 'email') {
          setEmail(value);
      }
      if (name === 'phone') {
          setPhone(value);
      }
      if (name === 'message') {
          setMessage(value);
      }
      if (name === 'name') {
          setName(value);
      }
  };

  const errorForm = () => title === '' || name === '' || email === '' || phone === '' || message === '' ? false : true;

  const sendMessage = (event) => {
      event.preventDefault();
      if(errorForm()) {
          emailjs.sendForm(
              'service_a8mqz6f',
              'template_o5ww04e',
              event.target,
              '5a9y3EldWFZL1HsHi'
          )
          .then(() => {
              setTitle('');
              setName('');
              setEmail('');
              setPhone('');
              setMessage('');
              alert.success('Mensagem enviada com sucesso!', {
                timeout: 2000,
              });
          }, () => {
              alert.error('Erro no envio', {
                timeout: 2000,
              });
          })
      } 
      else {
          alert.error('Falta parâmetros', {
            timeout: 2000,
          });
      }
  };

  return (
    <main className="mainContact" id='contact'>
        <h2>Fale comigo</h2>
        <section className='section_social'>
          <p>Se quiser pode mandar um email direto para mim preenchendo os dados abaixos, que logo te respondo ou acesse minhas redes</p>
          <form onSubmit={ sendMessage } className='formContact'>
            <label className='labelContact' htmlFor='title'>
                Assunto
                <input
                    className='inputContact' 
                    type='text'
                    placeholder='Digite o assunto da messagem'
                    id='title'
                    name='title'
                    value={ title }
                    onChange={ handleChange }
                />
            </label>
            <label className='labelContact' htmlFor='name'>
                Nome
                <input
                    className='inputContact' 
                    type='text'
                    placeholder='Digite o seu nome'
                    id='name'
                    name='name'
                    value={ name }
                    onChange={ handleChange }
                />
            </label>
            <label className='labelContact' htmlFor='email'>
                Email
                <input
                    className='inputContact'  
                    type='email'
                    placeholder='Digite seu email'
                    id='email'
                    name='email'
                    value={ email }
                    onChange={ handleChange }
                />
            </label>  
            <label className='labelContact' htmlFor='tel'>
                Telefone
                <input
                    className='inputContact'  
                    type='tel'
                    placeholder='Digite seu telefone'
                    id='tel'
                    name='phone'
                    value={ phone }
                    onChange={ handleChange }
                />
            </label>
            <label className='labelContact' htmlFor='message'>
                Mensagem
                <textarea
                    className='inputContact textArea'  
                    type='textarea'
                    name='message'
                    placeholder='Digite sua mensagem'
                    id='message'
                    value={ message }
                    onChange={ handleChange }
                />
            </label>
            <button 
                className='buttonContact'    
                type='submit'
            >
                Enviar Mensagem
            </button>
          </form>
        </section>
    </main>
  );
}

export default Contact;
