import React from 'react';

const Container: React.FC<any> = (props) => {
    console.log(props);
    return (
        <div>
            container
            {props.children}
        </div>
    );
};

export default Container;
