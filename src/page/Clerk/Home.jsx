import { useState } from "react";
import { locationData } from "../../data/locationDate";
import style from "../Clerk/Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    company: "",
    city: "",
    contact: "",
    tons: "",
    tonsRate: "",
    received: "",
  });

  // 👉 Current Date (auto updates on render)
  const todayDate = new Date().toLocaleDateString();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (
      !formData.company ||
      !formData.city ||
      !formData.contact ||
      !formData.tons ||
      !formData.tonsRate ||
      !formData.received
    ) {
      alert("Please fill all fields");
      return;
    }

    const total = Number(formData.tons) * Number(formData.tonsRate);
    const balance = total - Number(formData.received);

    const newRecord = {
      ...formData,
      total,
      balance,
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
      company: "",
      city: "",
      contact: "",
      tons: "",
      tonsRate: "",
      received: "",
    });
  };

  const handleEdit = (index) => {
    setFormData({
      company: data[index].company,
      city: data[index].city,
      contact: data[index].contact,
      tons: data[index].tons,
      tonsRate: data[index].tonsRate,
      received: data[index].received,
    });

    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  // 👉 Submit button action (you can connect API later)
  const handleSubmit = () => {
    alert("Data submitted successfully!");
    console.log("Final Data:", data);
  };

  return (
    <div className={style.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div className={style.datee}>{todayDate}</div>
      </div>

      {/* Entry Form */}
      <div className={style.entrydata}>
        <div className="form-row">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
          />
          <input
            type="number"
            name="tons"
            placeholder="Tons"
            value={formData.tons}
            onChange={handleChange}
          />
          <input
            type="number"
            name="tonsRate"
            placeholder="Tons Rate"
            value={formData.tonsRate}
            onChange={handleChange}
          />
          <input
            type="number"
            name="received"
            placeholder="Received"
            value={formData.received}
            onChange={handleChange}
          />

          <button className="add-btn" onClick={handleAdd}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>City</th>
            <th>Contact</th>
            <th>Tons</th>
            <th>Tons Rate</th>
            <th>Total</th>
            <th>Received</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.company}</td>
                <td>{item.city}</td>
                <td>{item.contact}</td>
                <td>{item.tons}</td>
                <td>{item.tonsRate}</td>
                <td>{item.total}</td>
                <td>{item.received}</td>
                <td>{item.balance}</td>
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

      {/* TABLE BOTTOM RIGHT SUBMIT BUTTON */}
      <div className={style.btnsubmit}>
        <button className="add-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
