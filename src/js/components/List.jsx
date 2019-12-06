import React from "react";
import { connect } from "react-redux";
import { removeArticle, completeArticle } from "../actions/indexActions";
import EditModal from "./EditModal";

const mapStateToProps = state => {
  return { articles: state.articles };
};
const mapActionsToProps = {
  removeArticle: removeArticle,
  completeArticle: completeArticle
};

const ConnectedList = ({ articles, removeArticle, completeArticle }) => (
  <ul>
    {articles.map((el, i) => (
      <li key={i}>
        <span
          style={{ textDecoration: el.isComplete ? "line-through" : "none" }}
        >
          {el.title}
        </span>
        <button onClick={() => removeArticle(i)}>delete</button>
        <button onClick={() => completeArticle(i)}>
          {!el.isComplete ? "complete" : "Undo"}
        </button>
        <EditModal buttonLabel="Edit" toEdit={el.title} index={i} />
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps, mapActionsToProps)(ConnectedList);

export default List;
