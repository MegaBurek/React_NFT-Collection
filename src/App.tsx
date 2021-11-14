import React, { FunctionComponent } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

//Custom components
import ThemeProvider from "Components/ThemeContext/ThemeProvider";
import MainPage from "UI/MainPage";

//Types
import NFTPage from "@/Views/NFTPage";
import NFTDetailPage from "@/Views/NFTDetailPage";

const App: FunctionComponent<any> = (props) => {

    return (
        <ThemeProvider>
            <BrowserRouter>
                <MainPage>
                    <Routes>
                        <Route path={"/"} element={<NFTPage/>}/>
                        <Route path={"/nft/:id"} element={<NFTDetailPage/>}/>
                    </Routes>
                </MainPage>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
