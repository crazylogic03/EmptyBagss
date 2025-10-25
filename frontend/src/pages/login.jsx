import { useState } from 'react';
import Logcontent from '@/components/ui/logcontent';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
        } else {
            alert(`Signing up with\nEmail: ${email}\nPassword: ${password}`);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google";
    };

    return (
        <div>
            <div style={{ flex: 1 }}>
                <Logcontent />
            </div>
            <div
                style={{
                    backgroundColor: '#c9ccb6',
                    position: 'absolute',
                    right: '200px',
                    top: '40%',
                    transform: 'translateY(-50%)',
                    width: '400px',
                    background: 'white',
                    padding: '32px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                }}
            >
                <h1 style={{ fontWeight: '700', marginBottom: '8px' }}>EmptyBags AI</h1>
                <h1 style={{ fontWeight: '400', color: '#555', marginBottom: '16px' }}>
                    Your AI-powered travel companion
                </h1>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        backgroundColor: '#f3f3f3',
                        borderRadius: '8px',
                        overflow: 'hidden',
                    }}
                >
                    <button
                        onClick={() => setIsLogin(true)}
                        style={{
                            flex: 1,
                            padding: '10px',
                            backgroundColor: isLogin ? 'white' : 'transparent',
                            border: 'none',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: '0.3s',
                            color: isLogin ? 'black' : '#777',
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        style={{
                            flex: 1,
                            padding: '10px',
                            backgroundColor: !isLogin ? 'white' : 'transparent',
                            border: 'none',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: '0.3s',
                            color: !isLogin ? 'black' : '#777',
                        }}
                    >
                        Sign Up
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition-colors"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center border border-gray-300 rounded py-2 px-4 mt-2 hover:bg-gray-100 transition-colors"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        {isLogin ? 'Login with Google' : 'Sign up with Google'}
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;
