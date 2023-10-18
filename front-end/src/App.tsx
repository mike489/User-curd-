/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import "./App.css";
// import UserForm from "./home"; // Make sure to import the UserForm component
// import UserModal from "./componets/usermodal";
import Home from "./home";
import axios from "axios";

const App: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [status,setStatus] = useState(false)
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users/all");
    console.log(res.data);
    setData(res.data)
  };
  useEffect(() => {
    fetchUsers();
  }, [status]);

  return (
    <Routes>
      <Route path="/" element={<Home data={data} setStatus={setStatus} selectedUser={null} />} />
    </Routes>
  );
};

export default App;
