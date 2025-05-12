const LoginPage = () => {
    const handleLogin = () => {
        localStorage.setItem('authToken', 'dummyToken');
        window.location.href = '/week5/premium';
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
