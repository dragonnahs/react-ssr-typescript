import React from 'react';
import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { loginAction } from '../store/user/action';

const Login: React.FC<any> = (props) => {
    console.log(props);
    const handlLogin = () => {
        Cookie.set('user', 'userinfo');
        props.loginAction({
            name: 'test admin',
            password: '1234455',
        });
    };
    return (
        <div>
            login page
            <br />
            {props.userInfo.name}
            <button onClick={handlLogin}>登陆</button>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        ...state.user,
    };
};

export default connect(mapStateToProps, { loginAction })(Login);
