import React from 'react'
import { useState, useEffect} from 'react';
import './article.css'

function Article() {

    const [advice, setAdvise] = useState({});

    const getAdvice = async () => {
       const response = await fetch('https://api.adviceslip.com/advice');
       const result = await response.json();
       setAdvise(result.slip);
    };

    useEffect(()=> {
        getAdvice()
    },[]);

    return (
        <article className='advice'>
            <span className='advice__id'>Advice #{advice.id}</span>
            <p className='advice__text'>‟{advice.advice}”</p>
            <button className='dice-button' onClick={() => getAdvice()}></button>
        </article>
    )
}

export default Article
