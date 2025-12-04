import axios from "axios";
import React, { useState } from "react";

const HTTPRequestAxios = () => {
  const [users, setUsers] = useState([]);
  const [resMessage, setResMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  // GET ALL USERS
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setErrMessage("Could not fetch users"));
  };

  // GET SINGLE USER
//   const fetchSingleData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users/3")
//       .then((res) => setUsers([res.data]))
//       .catch((err) => setErrMessage("Could not fetch user"));
//   };

  // POST
  const postData = () => {
    const newData = {
      name: "Aditya",
      username: "Aditya11",
      email: "hello@gmail.com",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newData)
      .then((res) => {
        setUsers([...users, res.data]); // append item
        setResMessage("User created successfully");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("User not created");
        setResMessage("");
      });
  };
  const putData = () => {
    const updatedData = {
      name: "Updated Aditya",
      username: "Aditya11",
      email: "updated@gmail.com",
    };

    axios
      .put("https://jsonplaceholder.typicode.com/users/3", updatedData)
      .then((res) => {
        // update user in state
        setUsers(
          users.map((u) => (u.id === 3 ? { ...u, ...res.data } : u))
        );
        setResMessage("User updated successfully");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("User not updated");
        setResMessage("");
      });
  };

  // DELETE
  const deleteData = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/8")
      .then(() => {
        setUsers(users.filter((u) => u.id !== 8));
        setResMessage("User deleted successfully");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("User not deleted");
        setResMessage("");
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch</button>
      {/* <button onClick={fetchSingleData}>Fetch Single</button> */}
      <button onClick={postData}>Post</button>
      <button onClick={putData}>Put</button>
      <button onClick={deleteData}>Delete</button>

      <p style={{ color: "green" }}>{resMessage}</p>
      <p style={{ color: "red" }}>{errMessage}</p>

      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <b>ID:</b> {item.id}
            <br />
            <b>Name:</b> {item.name}
            <br />
            <b>Email:</b> {item.email}
            <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HTTPRequestAxios;
