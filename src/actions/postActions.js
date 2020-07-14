const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

function addPostRequest() {
  return {
    type: ADD_POST
  };
}

function addPostSuccess(userId) {
  return {
    type: ADD_POST,
    payload: userId
  };
}
function addPostFailure(error) {
  return {
    type: ADD_POST,
    payload: error
  };
}

function deletePostRequest() {
  return {
    type: DELETE_POST
  };
}

function deletePostSuccess(userId) {
  return {
    type: DELETE_POST,
    payload: userId
  };
}

function deletePostFailure(error) {
  return {
    type: DELETE_POST,
    payload: error
  };
}

export {
  addPostRequest,
  addPostSuccess,
  addPostFailure,
  deletePostRequest,
  deletePostFailure,
  deletePostSuccess
};
