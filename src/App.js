import { Container } from "./component/container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Two } from "./pages/two";
import { Three } from "./pages/three";
import { Four } from "./pages/four";
import { Melody } from "./pages/melody";
import { Rhythm } from "./pages/rhythm";
import { Exam } from "./pages/exam";
import { Layout } from "./component/layout";
import "./App.css";

const App = () => {
     return (
          <>
               <Router>
                    <Layout>
                         <Container>
                              <Switch>
                                   <Route path='/' exact>
                                        <Home />
                                   </Route>
                                   <Route path='/exam'>
                                        <Exam />
                                   </Route>
                                   <Route path='/rhythm'>
                                        <Rhythm />
                                   </Route>
                                   <Route path='/melody'>
                                        <Melody />
                                   </Route>
                                   <Route path='/four'>
                                        <Four />
                                   </Route>
                                   <Route path='/three'>
                                        <Three />
                                   </Route>
                                   <Route path='/two'>
                                        <Two />
                                   </Route>
                              </Switch>
                         </Container>
                    </Layout>
               </Router>
          </>
     );
};

export default App;
