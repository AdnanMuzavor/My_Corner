import React from 'react';

const Contactcard=(props)=>{
    return(
        <>
        <div className="messagebox col-md-3 col-lg-3 col-5">
            <p>name: {props.name}</p>
            <p>email: {props.email}</p>
            <p className="noborder">Message: {props.message}</p>
            </div>
        </>
    )
}

export default Contactcard;