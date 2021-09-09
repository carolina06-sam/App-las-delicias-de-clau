import "./App.css";
import { Header } from "./components/Header/Header";
/* import { Categorias } from "./components/Categorias/Categorias"; */
import { Lacteos } from "./components/Lacteos/Lacteos";
import { Footer } from "./components/footer/Footer";
import { Carnicos } from "./components/Carnicos/Carnicos";
import { Otros } from "./components/Otros/Otros";
import logolacteos from "./img/Categorias/logoyogurt.png";
import logochorizo from "./img/Categorias/chorizofinal.png";
import logogalletas from "./img/Categorias/galletas.png";
import style from "./components/Categorias/categorias.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <Header />
                        <div className={style.list}>
                            <Link to="/">
                                <img
                                    src={logolacteos}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Lacteos</p>
                            </Link>
                            <Link to="/carnicos">
                                <img
                                    src={logochorizo}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Carnicoss</p>
                            </Link>
                            <Link to="/otros">
                                {" "}
                                <img
                                    src={logogalletas}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Galletas</p>
                            </Link>
                        </div>
                        <Lacteos />
                        <Footer />
                    </Route>
                    <Route path="/carnicos">
                        <Header />
                        <div className={style.list}>
                            <Link to="/">
                                <img
                                    src={logolacteos}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Lacteos</p>
                            </Link>
                            <Link to="/carnicos">
                                <img
                                    src={logochorizo}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Carnicoss</p>
                            </Link>
                            <Link to="/otros">
                                {" "}
                                <img
                                    src={logogalletas}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Galletas</p>
                            </Link>
                        </div>
                        <Carnicos />
                        <Footer />
                    </Route>
                    <Route path="/otros">
                        <Header />
                        <div className={style.list}>
                            <Link to="/">
                                <img
                                    src={logolacteos}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Lacteos</p>
                            </Link>
                            <Link to="/carnicos">
                                <img
                                    src={logochorizo}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Carnicoss</p>
                            </Link>
                            <Link to="/otros">
                                {" "}
                                <img
                                    src={logogalletas}
                                    alt="logo"
                                    className={style.icon}
                                />
                                <p className={style.name}>Galletas</p>
                            </Link>
                        </div>
                        <Otros />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
