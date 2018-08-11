import React from "react";
import List from "./List";
import Form from "./Form";
import UserList from "./UserList";

const App = () => (
    <div className="mt-5">
        <div className="row">
            <div className="col-md-4 offset-md-1">
                <h2>Articles</h2>
                <List />
            </div>
            <div className="col-md-4 offset-md-1">
                <h2>Add a new Article</h2>
                <Form />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 offset-md-1">
                <h2>User details fetched via Axios</h2>
                <UserList />
            </div>
        </div>
    </div>
);

export default App;