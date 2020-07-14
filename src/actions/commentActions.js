const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

function addCommentRequest() {
  return {
    type: ADD_COMMENT
  };
}
function addCommentSuccess(PostID) {
  return {
    type: ADD_COMMENT,
    payload: PostID
  };
}
function addCommentFailure(err) {
  return {
    type: ADD_COMMENT,
    payload: err
  };
}
function deleteCommentRequest() {
  return {
    type: DELETE_COMMENT
  };
}
function deleteCommentSuccess(PostID) {
  return {
    type: DELETE_COMMENT,
    payload: PostID
  };
}
function deleteCommentFailure(err) {
  return {
    type: DELETE_COMMENT,
    payload: err
  };
}

export {
  addCommentRequest,
  addCommentSuccess,
  addCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
};
