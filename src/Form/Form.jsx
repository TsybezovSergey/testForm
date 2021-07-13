import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/Context";
import style from "./form.module.css";

export const Form = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { setAuth } = useAuthContext();

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.email.trim() && state.password.trim()) {
      fetch("~URL~", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.ok) {
            //по идее логика должна быть тут
          }
        }).catch(() => {
          localStorage.setItem("auth", JSON.stringify(state));
          setAuth(true)
        })
    }
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <span>Sign In</span>
      <label>Email address</label>
      <input
        className={style.input}
        type="text"
        value={state.email}
        onChange={(e) =>
          setState({
            ...state,
            email: e.target.value,
          })
        }
        placeholder="Enter email"
      />
      <label>Password</label>
      <input
        className={style.input}
        type="text"
        value={state.password}
        onChange={(e) =>
          setState({
            ...state,
            password: e.target.value,
          })
        }
        placeholder="Enter password"
      />
      <button className={style.button} type="submit">
        Submit
      </button>
      <span className={style.support}>
        Forgot&nbsp;<Link to="#">pasword?</Link>
      </span>
    </form>
  );
};
