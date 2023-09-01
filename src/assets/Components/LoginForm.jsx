import React, { useState } from 'react';

export function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Prepare the request payload with the provided login information
       fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'johnd',
        password: 'm38rmF$'
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Bad Request');
    }
    return response.json();
})
.then(json => console.log(json))
.catch(error => console.error('Fetch error:', error));
}

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}