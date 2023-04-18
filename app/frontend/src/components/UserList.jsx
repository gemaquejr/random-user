import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/requests';
import Button from './Button';

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getAllUsers();
      const { data } = response;
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleNextUser = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousUser = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          index === currentIndex && (
            <li key={user.id}>
              <img src={user.photo} alt={user.name} />
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
              <div>{user.birthday}</div>
              <div>{user.address}</div>
            </li>
          )
        ))}
      </ul>
      <div>
        <Button label="Previous" onClick={handlePreviousUser} />
        <Button label="Next" onClick={handleNextUser} />
      </div>
    </div>
  );
}

export default UserList;
