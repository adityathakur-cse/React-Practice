import React, { useState } from 'react';

const HTTPRequestComp = () => {
  const [posts, setPosts] = useState([]);
  const [resMessage, setResMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const fetchData = () => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        console.log(data.users);
        setPosts(data.users);
        setResMessage("Data fetched successfully!");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("Failed to fetch data!");
        setResMessage("");
      });
  };

  const postData = () => {
    const newData = {
      userID: 400,
      title: "React Class"
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    })
      .then(res => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then(data => {
        console.log(data);
        setResMessage("Post added successfully!");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("Failed to add post!");
        setResMessage("");
      });
  };
  const putData = () => {
    const updateData = {
      id: 1,
      title: "Updated React Class"
    };

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResMessage("Data updated successfully!");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("Failed to update data!");
        setResMessage("");
      });
  };

  const deleteData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) throw new Error("Delete failed");
        setResMessage("Data deleted successfully!");
        setErrMessage("");
      })
      .catch(() => {
        setErrMessage("Failed to delete data!");
        setResMessage("");
      });
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">HTTP Requests Demo</h2>
      <div className="space-x-3">
        <button onClick={fetchData} className="bg-blue-500 text-white px-3 py-1 rounded">Fetch Data</button>
        <button onClick={postData} className="bg-green-500 text-white px-3 py-1 rounded">Post Data</button>
        <button onClick={putData} className="bg-yellow-500 text-white px-3 py-1 rounded">Put Data</button>
        <button onClick={deleteData} className="bg-red-500 text-white px-3 py-1 rounded">Delete Data</button>
      </div>
      <p className="text-green-500">{resMessage}</p>
      <p className="text-red-500">{errMessage}</p>

      {/* <div>
        <h3 className="text-lg font-semibold mt-4">Fetched Users:</h3>

        {posts.length === 0 ? (
          <p>No data yet. Click "Fetch Data"</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {posts.map((user) => (
              <li key={user.id} className="p-3 border rounded bg-gray-100">
                <p><b>Name:</b> {user.firstName} {user.lastName}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Age:</b> {user.age}</p>
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default HTTPRequestComp;
