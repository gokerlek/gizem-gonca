import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./component/layout";
import { Page } from "./pages/page";
import "./App.css";

const App = () => {
     return (
          <>
               <Router>
                    <Layout>
                         <Switch>
                              <Route path='/' exact>
                                   <Home />
                              </Route>

                              <Route path='/page/:slug'>
                                   <Page />
                              </Route>
                         </Switch>
                    </Layout>
               </Router>
          </>
     );
};

export default App;
