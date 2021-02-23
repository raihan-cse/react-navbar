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
    if (props.authorized) {
        return(
            <SecretComponent />
        );
    }else{
        return(
            <PublicComponent />
        );
    }
}

export default Parctice;