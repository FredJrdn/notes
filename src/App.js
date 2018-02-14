import React from 'react';
import { Route } from "react-router-dom";
import notes from "./components/notes";

const App = () => (
    <div>
        <Route path="/" exact component={notes} />
    </div>
);

export default App;