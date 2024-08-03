import React, { useEffect, useState } from "react";
import "../Css/login.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
export default function Login() {
  const [data, setData] = useState({ name: "", real_name: "" });
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      console.log("no token found");
    }
  }, []);
  const handleSubmit = (e) => {
     e.preventDefault();
    if (data.name === "Bell" && data.real_name === "Nargiza") {
      sessionStorage.setItem("token", JSON.stringify(data));
      toast("To'gri", { type: "success" });
      setTimeout(() => {
          navigate("/");
      }, 700);
    } else {
      console.log("no token found");
      toast("Noto'gri", { type: "error" });
    }
  };
  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <p>Malika</p>
        <div className="group">
          <input
            required="true"
            className="main-input"
            type="text"
            onChange={(e) => setData((p)=>({...p,name:e.target.value}))}
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Nomi</label>
        </div>
        <div className="container-1">
          <div className="group">
            <input required="true" className="main-input" type="text"  onChange={(e) => setData((p)=>({...p,real_name:e.target.value}))}/>
            <span className="highlight-span"></span>
            <label className="lebal-email">Sizning Ismingiz</label>
          </div>
        </div>
        <button className="submit" type="submit">submit</button>
      </form>
    </div>
  );
}
