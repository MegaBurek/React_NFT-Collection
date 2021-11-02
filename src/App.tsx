import React, { FunctionComponent } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//Custom components
import MainPage from "UI/MainPage";

//Routes
import publicRoutes from "Routes/public";

//Types
import { RouteType } from "@/@types/common";

var history = createBrowserHistory();


const App: FunctionComponent<any> = (props) => {

  return (
      <Router history={history}>
        <MainPage>
          <Switch>
            {publicRoutes.map((route: RouteType, key: number) => (
                <Route path={route.path} key={key} component={route.component} />
            ))}
          </Switch>
        </MainPage>
      </Router>
  );
};

export default App;
