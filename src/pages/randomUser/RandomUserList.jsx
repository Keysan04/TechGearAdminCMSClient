import React, { useEffect, useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import { getRandomUsers } from "../../helpers/axiosHelper";
import { AdminLayout } from "../../components/layout/AdminLayout";

const RandomUserList = () => {
  const [totalUsers, setTotalUsers] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  console.log(totalUsers);
  useEffect(() => {
    getUsers();
    setFilterUser(totalUsers);
  }, []);
  const getUsers = async () => {
    const { results } = await getRandomUsers();
    console.log(results);
    setTotalUsers(results);
    setFilterUser(results);
  };
  const handleOnGenderSelect = async (e) => {
    const { value } = e.target;
    console.log(value);

    if (value === "M") {
      setFilterUser(totalUsers.filter((item, i) => item.gender === "male"));
      console.log(filterUser);
    } else if (value === "F") {
      setFilterUser(totalUsers.filter((item, i) => item.gender === "female"));
    } else if (value === "A") {
      setFilterUser(totalUsers);
    }
    // setFilterUser(getUsers());
  };
  return (
    <div>
      <AdminLayout>
        <Button variant="danger" onClick={getUsers} className="btn mt-5 p-2">
          Get Random Users{" "}
        </Button>
        <Alert>{filterUser.length}</Alert>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Button
            type="button"
            class="btn btn-secondary"
            value="M"
            onClick={handleOnGenderSelect}
          >
            Male
          </Button>
          <Button variant="danger" value="F" onClick={handleOnGenderSelect}>
            Female
          </Button>
          <Button variant="info" value="A" onClick={handleOnGenderSelect}>
            All
          </Button>
        </div>
        <div className="d-flex flex-wrap justify-content-between gap-4">
          {filterUser.map(({ picture }, i) => (
            <div>
              <div className="card" style={{ width: "300px" }}>
                <img class="card-img-top" src={picture.medium} alt="Card" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>

              <th>Gender</th>
              <th>Address</th>
              <th>Email </th>
              <th>Photo </th>
            </tr>
          </thead>
          <tbody>
            {totalUsers.map(({ gender, name, location, picture, email }, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{name.title + " " + name.first + " " + name.last}</td>
                <td>{gender}</td>
                <td>{location.country + " " + location.state}</td>
                <td>{email}</td>
                <td>{picture.medium}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AdminLayout>
    </div>
  );
};

export default RandomUserList;
