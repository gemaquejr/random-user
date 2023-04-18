import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/requests';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getAllUsers();
      const { data } = response;
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.photo} alt={user.name} />
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.birthday}</div>
            <div>{user.address}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
