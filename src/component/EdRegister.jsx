import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./EdRegister.module.css";

const EdRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    fname: "",
    cnic: "",
    contact: "",
    state: "",
    type: "",
    salary: "",
    adv: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let balance = Number(form.salary) - Number(form.adv);

    let newData = {
      ...form,

      balance,
    };

    localStorage.setItem(
      form.type,

      JSON.stringify(newData),
    );

    if (form.type === "MeelEmployees") {
      navigate("/meel-employees");
    }

    if (form.type === "StackEmployees") {
      navigate("/stack-employees");
    }

    if (form.type === "MeelDriver") {
      navigate("/meel-driver");
    }

    if (form.type === "StackDriver") {
      navigate("/stack-driver");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.formBox} onSubmit={submitHandler}>
        <h2>Register</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />

        <input name="fname" placeholder="F/Name" onChange={handleChange} />

        <input name="cnic" placeholder="CNIC" onChange={handleChange} />

        <input name="contact" placeholder="Contact" onChange={handleChange} />

        <select name="state" onChange={handleChange}>
          <option>Select</option>

          <option value="employee">Employee</option>

          <option value="driver">Driver</option>
        </select>

        {form.state === "employee" && (
          <select name="type" onChange={handleChange}>
            <option>Select</option>

            <option>MeelEmployees</option>

            <option>StackEmployees</option>
          </select>
        )}

        {form.state === "driver" && (
          <select name="type" onChange={handleChange}>
            <option>Select</option>

            <option>MeelDriver</option>

            <option>StackDriver</option>
          </select>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default EdRegister;
