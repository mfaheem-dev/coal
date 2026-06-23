import { useNavigate } from "react-router-dom";
import style from "./MeelEmployess.module.css";

const StackEmployees = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.topBar}>
        <button className={style.addBtn} onClick={() => navigate("/register")}>
          Add New
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>F/Name</th>
            <th>Salary</th>
            <th>Adv money</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Kamran</td>
            <td>Kamran</td>
            <td>25000</td>
            <td>5000</td>
            <td>20000</td>

            <td>
              <div className={style.actionBtns}>
                <button className={style.delete}>Delete</button>
                <button className={style.edit}>Edit</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <button className={style.submit}>Submit</button>
    </div>
  );
};

export default StackEmployees;
