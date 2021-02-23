import React from 'react';

function SecretComponent () {
    return(
        <h1>Secret component</h1>
    );
}

function PublicComponent(){
    return(
        <h1>return public component</h1>
    );
}
function Parctice(props) {
    return(
        <>
        {props.authorized ? <SecretComponent /> : <PublicComponent />}
        </>
    );
}

export default Parctice;