import React from "react";
import { connect } from "react-redux";

const connectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
    {articles.map(el => (
        <li className="list-group-item" key={el.id}>
        {el.title}
        </li>
    ))}
    </ul>
);

const mapStateToProps = state => {
    console.log("STORE STATE: ", state);
    return {
        articles: state.rootReducer.articles
    };
}

const List = connect(mapStateToProps)(connectedList);

export default List;