/* eslint-disable @typescript-eslint/no-explicit-any */
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import UserModal from "./componets/usermodal";
import axios from "axios";
import { useState } from "react";
interface DataType {
  _id: string;
  name: string;
  password: string;
  phone: string;
  email: string;
}

interface Prop {
  data: any[];
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: DataType | null;
}

const Home: React.FC<Prop> = ({ data, setStatus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  console.log(data, "data");
  const handleDelete = async (_id: string) => {
    await axios.delete(`http://localhost:5000/users/remove/${_id}`);
    setStatus((prev) => !prev);
  };

  const fetchUser = async (_id: string) => {
    const res = await axios.get(`http://localhost:5000/users/${_id}`);
    return res.data;
  };

  // const handleEdit = async (_id: string) => {
  //   await axios.put(`http://localhost:5000/users/update/${_id}`);
  //   setStatus((prev) => !prev);
  // };

  const editUser = async (_id: string) => {
    const user = await fetchUser(_id);
    setSelectedUser(user);
    showModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    // {
    //   title: "password",
    //   dataIndex: "password",
    //   key: "password",
    // },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record: DataType) => (
        <Space size="middle">
          <button onClick={() => handleDelete(record._id)}>Delete</button>
          {/* <button onClick={() => editUser(record)}>Edit</button> */}
          <button onClick={() => editUser(record._id)}>Edit</button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <UserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setStatus={setStatus}
        selectedUser={selectedUser}
      />
      <Table columns={columns} dataSource={data} style={{ margin: "10px" }} />
    </>
  );
};

export default Home;
