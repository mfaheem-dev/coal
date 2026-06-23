import { useState } from "react";
import style from "../Clerk/Expenditures.module.css";

const Expenditures = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    Name: "",
    Details: "",
    Amounts: "",
  });

  const todayDate = new Date().toLocaleDateString();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (!formData.Name || !formData.Details || !formData.Amounts) {
      alert("Please fill all fields");
      return;
    }

    const total = Number(formData.Details) * Number(formData.Amounts);
    // const balance = total - Number(formData.received);

    const newRecord = {
      ...formData,
      Amounts,
      // balance,
    };

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = newRecord;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, newRecord]);
    }

    setFormData({
      Name: "",
      Details: "",
      Amounts: "",
    });

    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData({
      Name: data[index].Name,
      Details: data[index].Details,
      Amounts: data[index].Amounts,
    });

    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleSubmit = () => {
    alert("Data submitted successfully!");
    console.log(data);
  };

  return (
    <div className={style.container}>
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <button className="add-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add New"}
        </button>

        <div className={style.datee}>{todayDate}</div>
      </div>

      {/* Hidden Form */}
      {showForm && (
        <div className={style.entrydata}>
          <div className="form-row">
            <input
              type="text"
              name="Name"
              placeholder="Company Name"
              value={formData.Name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="Details"
              placeholder="Details"
              value={formData.Details}
              onChange={handleChange}
            />

            <input
              type="text"
              name="Amounts"
              placeholder="Amounts"
              value={formData.Amounts}
              onChange={handleChange}
            />
            <button className="add-btn" onClick={handleAdd}>
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Amounts</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Name}</td>
                <td>{item.Details}</td>
                <td>{item.Amounts}</td>

                <td className={style.editbtn}>
                  <button
                    className={style.editBtn}
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>

                  <button
                    className={style.deleteBtn}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className={style.btnsubmit}>
        <button className="add-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Expenditures;
