import { useNavigate } from "react-router-dom";
import style from "./MeelDrivers.module.css";

const MeelDrivers = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: "Kamran",
      fname: "Kamran",
      trailerPrice: 1200,
      trailerNo: 4,
      diesel: 1000,
      advance: 500,
    },
    {
      id: 2,
      name: "Usman",
      fname: "Usman",
      trailerPrice: 1200,
      trailerNo: 8,
      diesel: 2000,
      advance: 1000,
    },
    {
      id: 3,
      name: "Javid",
      fname: "Javid",
      trailerPrice: 1200,
      trailerNo: 5,
      diesel: 1500,
      advance: 500,
    },
  ];

  return (
    <div className={style.container}>
      {/* Top Bar */}
      <div className={style.topBar}>
        <button className={style.addBtn} onClick={() => navigate("/register")}>
          Add New
        </button>
      </div>

      {/* Table */}
      <div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>F/Name</th>
              <th>Trailer Price</th>
              <th>Trailer No</th>
              <th>Total Money</th>
              <th>Diesel</th>
              <th>Advance</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              const totalMoney = item.trailerPrice * item.trailerNo;

              const balance = totalMoney - item.diesel - item.advance;

              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.fname}</td>
                  <td>{item.trailerPrice}</td>
                  <td>{item.trailerNo}</td>
                  <td>{totalMoney}</td>
                  <td>{item.diesel}</td>
                  <td>{item.advance}</td>
                  <td>{balance}</td>

                  <td>
                    <div className={style.actionBtns}>
                      <button className={style.delete}>Delete</button>

                      <button className={style.edit}>Edit</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button className={style.submit}>Submit</button>
    </div>
  );
};

export default MeelDrivers;
