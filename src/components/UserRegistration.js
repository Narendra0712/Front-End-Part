import React, { useState } from "react";
import { toast } from "react-toastify";
import { ADDUSER } from "../services/userservices";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserRegistration = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    if (username.length === 0) {
      toast.warning("Enter User Name");
    } else if (password.length === 0) {
      toast.warning("Enter Password");
    } else {
      const postdata = {
        username,
        password,
      };
      axios.post(ADDUSER, postdata).then((response) => {
        const result = response.data;
        console.log(result["data"]);

        if (result["status"] === "success") {
          toast.success("Registration Successful !");

          const { username, password } = result["data"];
          sessionStorage["User UserName"] = username;
          sessionStorage["Password Password"] = password;

          navigate("/");
        } else {
          toast.error("Registraion Failed !");
        }
      });
    }
  }

  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Add Admin</h2>
      </div>
      <section className="wrapper">
        <form className="form-right">
          <div className="row">
            <div className="mb-3">
              <label>Set User Name</label>
              <input
                type="text"
                className="input-field"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>

            <div className="mb-3">
              <label>Set Password</label>
              <input
                type="password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="form-field">
              <input
                type="submit"
                value="Register"
                className="register"
                name="register"
                onClick={handleClick}
              ></input>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserRegistration;
