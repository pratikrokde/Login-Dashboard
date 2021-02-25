import React, { useEffect, useState } from "react";
import "./Content.css";
import { Layout } from "antd";
import { axios } from "axios";
import { AiFillDelete } from "react-icons/ai";

const { Content } = Layout;

function Contents() {
  const [usersData, setUsersData] = useState();

  // useEffect(() => {
  //   getDataFromAPi();
  // }, []);

  //dataFromApi
  const getDataFromAPi = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    const newData = data.data;
    setUsersData(newData);
  };

  const deleteBtnHandler = (id) => {
    const newData = usersData.slice();
    const results = newData.filter((user) => user.id !== id);
    setUsersData(results);
  };

  const getDataOnClick = () => {
    getDataFromAPi();
  };
  return (
    <Layout className="layoutContent">
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <button className="getDataBtn" onClick={getDataOnClick}>
          Get Data
        </button>
        <table>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>delete</th>
          </tr>

          {usersData &&
            usersData.map((user) => {
              const { id, first_name, last_name, email } = user;
              return (
                <tr key={id}>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>{email}</td>
                  <td>
                    <AiFillDelete
                      className="deleteIcon"
                      onClick={() => deleteBtnHandler(id)}
                    />
                  </td>
                </tr>
              );
            })}
        </table>
      </Content>
    </Layout>
  );
}

export default Contents;
