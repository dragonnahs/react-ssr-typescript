import React from 'react';
import style from './index.module.scss';

const App: React.FC<any> = () => {
    return (
        <div className={style.home}>
            home page
            <div className={style['home-content']}>home content</div>
        </div>
    );
};

export default App;
