import React from 'react';
import Cookie from 'js-cookie';

const Login: React.FC<any> = () => {
    const handlLogin = () => {
        Cookie.set('user', 'userinfo');
    };
    return (
        <div>
            login page
            <button onClick={handlLogin}>登陆</button>
        </div>
    );
};

export default Login;
