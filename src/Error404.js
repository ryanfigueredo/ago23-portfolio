import React from 'react';
import { Link } from 'react-router-dom';
import './error404.css';

const Error404 = () => {
  return (
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: '#fff',
        fontWeight: '900',
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#03030D',
      }}
    >
      <Link
        to="/"
        style={{
          color: '#1d1d96',
          textDecoration: 'none',
          fontSize: '.8rem',
          border: '.1rem solid #0c0c29',
          padding: '10px 20px',
          borderRadius: '5px',
        }}
      >
        Voltar para a página inicial
      </Link>
      
    </div>
  );
};

export default Error404;
