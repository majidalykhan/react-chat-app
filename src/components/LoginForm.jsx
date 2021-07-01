import { useState } from "react";
import axios from "axios";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const PROJECT_ID = process.env.REACT_APP_CHAT;

    const handleSubmit = async (e) => {
        e.preventDefault();

        //username / password => chatengine => give messages
        const authObject = {'Project-ID':PROJECT_ID, 'User-Name':username, 'User-Secret':password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            //If success, logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            
            setError('Username or Password Incorrect!')
        }   
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'><span>Let's Start</span></button>
                    </div>
                    <h3 className='error'>{error}</h3>
                </form>
            </div>
        </div>
    )

}

export default LoginForm;