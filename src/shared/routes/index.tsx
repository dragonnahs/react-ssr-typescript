import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '../utils/loadable';
import Container from '../components/container';
import PrivateRoute from './privateRoute';

const Home = loadable(() => import('../pages/home'));
const Ad = loadable(() => import('../pages/ad'));
const Login = loadable(() => import('../pages/login'));
const Error404 = loadable(() => import('../pages/error'));

export const commonRoutes: any[] = [
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/404',
        exact: true,
        component: Error404,
    },
];

export const adminRoutes: any[] = [
    {
        path: '/cms/home',
        exact: true,
        component: Home,
    },
    {
        path: '/cms/ad',
        exact: true,
        component: Ad,
    },
];

const Routes: React.FC<any> = () => {
    return (
        <div>
            <Switch>
                {
                    <Route
                        path="/cms"
                        render={() => {
                            return (
                                <Container>
                                    <Switch>
                                        {adminRoutes.map((comp) => {
                                            return (
                                                <PrivateRoute
                                                    exact={comp.exact}
                                                    path={comp.path}
                                                    key={comp.path}
                                                    component={comp.component}
                                                />
                                            );
                                        })}
                                        <Redirect to="/cms/home" from="/cms" />
                                        <Redirect to="/404" />
                                    </Switch>
                                </Container>
                            );
                        }}
                    />
                }
                {commonRoutes.map((comp) => {
                    return (
                        <Route
                            exact={comp.exact}
                            path={comp.path}
                            key={comp.path}
                            component={comp.component}
                        />
                    );
                })}
                <Redirect to="/cms" from="/" />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
};

export default Routes;
