import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getusers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div className="row text-center">
      {users.map((user) => (
        <div className="col-md-4 ">
          <div className="shadow-sm mx-3 my-3">
            <Card>
              <Card.Body>
                <Card.Title>{user.userID}</Card.Title>
                <Card.Text>{user.marketID}</Card.Text>
                <Card.Text>{user.marketName}</Card.Text>
                <Card.Text>{user.marketType}</Card.Text>
                <Card.Text>{user.cmdtyName}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
