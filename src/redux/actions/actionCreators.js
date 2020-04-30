import * as actionTypes from "./actionTypes";
import baseUrl from "./../baseurl";

export const page = (val) => (dispatch) => {
  dispatch({
    type: actionTypes.PAGER,
    payload: val,
  });
};

export const token = () => {
  return {
    type: actionTypes.TOKEN,
    payload: false,
  };
};

export const auth = (curr) => (dispatch) => {
  dispatch({
    type: actionTypes.AUTH,
    payload: !curr,
  });
};

export const login = (info) => (dispatch) => {
  return fetch(baseUrl + "auth/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            localStorage.setItem("token", data.token);
            dispatch({
              type: actionTypes.PAGER,
              payload: 2,
            });
            dispatch({
              type: actionTypes.TOKEN,
              payload: data.token,
            });
          } else if (data.success === false) {
            dispatch({
              type: actionTypes.MESSAGE,
              payload: data.msg,
            });
          }
        });
      },
      (error) => {
        dispatch({
          type: actionTypes.ERROR,
          payload: true,
        });
      }
    )
    .then(function (data) {})
    .catch((error) => {
      dispatch({
        type: actionTypes.ERROR,
        payload: true,
      });
    });
};

export const signup = (info) => (dispatch) => {
  dispatch({
    type: actionTypes.MESSAGE,
    payload: "Signing you in...",
  });
  return fetch(baseUrl + "auth/signup", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(info),
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.PAGER,
              payload: 1,
            });
            dispatch({
              type: actionTypes.MESSAGE,
              payload: "Signup success please verify email to login",
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const posts = (info) => (dispatch) => {
  return fetch(baseUrl, {
    method: "get",
    headers: { "Content-Type": "application/json", token: localStorage.token },
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.POSTS,
              payload: data.data,
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const postCreator = (file) => (dispatch) => {
  dispatch({
    type: actionTypes.MESSAGE,
    payload: "Uploading...(only png/jpg/jpeg allowed)",
  });
  const formData = new FormData();
  formData.append("file", file);
  return fetch(baseUrl + "post", {
    method: "post",
    headers: {
      token: localStorage.token,
    },
    body: formData,
  })
    .then(
      (response) => {
        if (response.status === 500) {
          dispatch({
            type: actionTypes.MESSAGE,
            payload: "Upload failed...",
          });
        }
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.MESSAGE,
              payload: "Image upload successful...:)",
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};

export const search = (keyword) => (dispatch) => {
  return fetch(baseUrl + "search", {
    method: "post",
    headers: { "Content-Type": "application/json", token: localStorage.token },
    body: JSON.stringify(keyword),
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.SEARCH,
              payload: data.data,
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};

export const friends = () => (dispatch) => {
  return fetch(baseUrl + "chat", {
    method: "get",
    headers: { "Content-Type": "application/json", token: localStorage.token },
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.FRIENDS,
              payload: data.data,
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const userProfile = (username) => (dispatch) => {
  return fetch(baseUrl + `search/${username}`, {
    method: "get",
    headers: { "Content-Type": "application/json", token: localStorage.token },
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.USERDATA,
              payload: data.data,
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};

export const requestAccept = (username) => (dispatch) => {
  return fetch(baseUrl + `search/${username}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.token,
      status: 0,
    },
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            var updater = (username) => {
              dispatch(userProfile(username));
            };
            updater(username);
            dispatch({
              type: actionTypes.MESSAGE,
              payload: "Request accepted",
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const requestSend = (username) => (dispatch) => {
  return fetch(baseUrl + `search/${username}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.token,
      status: 1,
    },
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            var updater = (username) => {
              dispatch(userProfile(username));
            };
            updater(username);
            dispatch({
              type: actionTypes.MESSAGE,
              payload: "Request sent",
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const profile = () => (dispatch) => {
  return fetch(baseUrl + "me", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.token,
    },
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.PROFILE,
              payload: data.data,
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};

export const addChat = (name, message) => (dispatch) => {
  return fetch(baseUrl + `chat/${name}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.token,
    },
    body: JSON.stringify(message),
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.PROFILE,
              payload: data.data,
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const fetchChats = (name) => (dispatch) => {
  return fetch(baseUrl + `chat/${name}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.token,
    },
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.CHAT,
              payload: data.data,
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};

export const profileImgUpdate = (file) => (dispatch) => {
  dispatch({
    type: actionTypes.MESSAGE,
    payload: "Uploading...(only png/jpg/jpeg allowed)",
  });
  const formData = new FormData();
  formData.append("file", file);
  return fetch(baseUrl + "me/profileimg", {
    method: "post",
    headers: {
      token: localStorage.token,
    },
    body: formData,
  })
    .then(
      (response) => {
        if (response.status === 500) {
          dispatch({
            type: actionTypes.MESSAGE,
            payload: "Upload failed...",
          });
        }
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.MESSAGE,
              payload: "Profile image updated successfully...:)",
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};

export const passwordUpdate = (password) => (dispatch) => {
  return fetch(baseUrl + "me/password", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.token,
    },
    body: JSON.stringify(password),
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.MESSAGE,
              payload: "Password update successful...:)",
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};

export const bioUpdate = (bio) => (dispatch) => {
  return fetch(baseUrl + "me/bio", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.token,
    },
    body: JSON.stringify(bio),
  })
    .then(
      (response) => {
        response.json().then((data) => {
          if (data.success === true) {
            dispatch({
              type: actionTypes.MESSAGE,
              payload: "Bio update successful...:)",
            });
          }
        });
      },
      (error) => {
        alert(error);
      }
    )
    .catch((error) => {
      alert(error);
    });
};
