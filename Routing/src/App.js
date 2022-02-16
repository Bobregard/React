import { Redirect, Route } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import Quote from "./pages/Quote";
import Quotes from "./pages/Quotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

const { Switch } = require("react-router-dom/cjs/react-router-dom.min");

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <Quotes></Quotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <Quote></Quote>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
