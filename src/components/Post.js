import React from "react";
import PropTypes from "prop-types";
function Post({ id, title, deletePost }) {
  return (
    <div className="Post">
      <div className="Post__title">
        {title}{" "}
        <button className="Post__delete" onClick={() => deletePost(id)}>
          X
        </button>
      </div>

      <img
        className="Post__image"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
    </div>
  );
}

Post.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};
export default Post;
