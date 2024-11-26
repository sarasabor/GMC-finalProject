import React, { useState } from 'react'

const SignupForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='w-[40%] m-auto'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email :</label>
                <input 
                    type='email'
                    placeholder='Enter Your Email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <input 
                    type='password'
                    placeholder='Enter Your Password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input type="submit" value="Signup" />
            </div>
        </form>
    </div>
  )
}

export default SignupForm