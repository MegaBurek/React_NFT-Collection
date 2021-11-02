import React, { FunctionComponent } from 'react';

//Custom components
import Header from "UI/Header";

const MainPage: FunctionComponent<any> = (props) => {

    return (
        <div id="page">
            <main id="content-wrapper">
                <Header/>
                <div id="content">{props.children}</div>
            </main>
        </div>
    );
};

export default MainPage;
