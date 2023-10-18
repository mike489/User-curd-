import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
interface Props {
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedUser: any;
}
const UserModal = ({
  selectedUser,
  setStatus,
  isModalOpen,
  setIsModalOpen,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedUser) {
      form.setFieldsValue({
        name: selectedUser.name,
        email: selectedUser.email,
        // password: selectedUser.password,
        phone: selectedUser.phone,
      });
    } else {
      form.resetFields();
    }
  }, [selectedUser, form]);

  interface FormValues {
    name: string;
    email: string;
    password: string;
    phone: string;
  }
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  async function onFinish(values: FormValues): Promise<void> {
    setIsSubmitting(true);
    setTimeout(async () => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      console.log("Received values of form: ", values);

      // Set refreshUsers to true to trigger a re-fetch of users
      setRefreshUsers(true);

      if (selectedUser) {
        // Update existing user
        await axios.put(
          `http://localhost:5000/users/update/${selectedUser._id}`,
          values
        );
      } else {
        // Create new user
        await axios.post("http://localhost:5000/users/signup", values);
      }

      form.resetFields();

      setStatus((prev) => !prev);
    }, 1000);
  }

  useEffect(() => {
    setRefreshUsers(true);
  }, [refreshUsers]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        ADD USER
      </Button>
      <Modal
        title="User "
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          // <Button
          //   key="submit"
          //   type="primary"
          //   loading={isSubmitting}
          //   onClick={() => {
          //     const form = document.getElementsByName("user-form")[0];
          //     if (form) {
          //       form.dispatchEvent(new Event("submit", { cancelable: true }));
          //     } else {
          //       console.error("Form not found");
          //     }
          //   }}
          // >
          //   Submit
          // </Button>,
        ]}
      >
        <Form
          form={form}
          name="user-form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
