import React, { Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import Cookie from 'js-cookie';

interface InitProps extends RouteProps {
    key?: string;
    component?: React.ComponentProps<any>;
}

class PrivateRoute extends Component<InitProps> {
    render() {
        const { exact = false, key, component: Component, path } = this.props;
        return (
            // 获取用户信息不能使用storage，服务端渲染没有对应的api
            <Route
                path={path}
                exact={exact}
                key={key}
                render={(props) => {
                    if (Cookie.get('user')) {
                        return <Component {...props} />;
                    }
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: path },
                            }}
                        />
                    );
                }}
            />
        );
    }
}

export default PrivateRoute;
