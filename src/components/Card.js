import React from 'react';
import ProductsInfo from './ProductsInfo';

function Card({message, user, buttonFunction, children}){
    return (
        <div style={{border: '1px solid black', width: '400px', height: '260px'}}>
                    {message}
            <UserInfo {...user}/>
            <button onClick={buttonFunction}>Click aquí</button>
            {children}
        </div>
    )
}

export default Card