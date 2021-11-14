import React, { FunctionComponent } from 'react';

//Custom components
import Header from "UI/Header/Header";
import Footer from "UI/Footer";

const MainPage: FunctionComponent<any> = (props) => {

    return (
        <div id="page">
            <main id="content-wrapper">
                <Header/>
                <div id="content">{props.children}</div>
                {/*<Footer/>*/}
            </main>
        </div>
    );
};

export default MainPage;
