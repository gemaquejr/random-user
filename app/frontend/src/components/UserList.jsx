import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/requests';
import Button from './Button';
import Loading from './Loading';
import Error from './Error';

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        const { data } = response;
        setUsers(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchData();
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

  const formatBirthday = (birthday) => {
    const date = new Date(birthday);
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <h1>Users</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Error message={error} />
          <div className="container-user">
            {users.map((user, index) => (
              index === currentIndex && (
                <div className="user" key={user.id}>
                  <img src={user.photo} alt={user.name} />
                  <div>
                    <h5>Hi, My name is:</h5>
                    {user.name}
                  </div>
                  <div>
                    <h5>My email address is:</h5>
                    {user.email}
                  </div>
                  <div>
                    <h5>My birthday is:</h5>
                    {formatBirthday(user.birthday)}
                  </div>
                  <div>
                    <h5>My address is:</h5>
                    {user.address}
                  </div>
                  <div>
                    <h5>My phone number is:</h5>
                    {user.phone}
                  </div>
                  <div>
                    <h5>My password is:</h5>
                    {user.password}
                  </div>
                </div>
              )
            ))}
          </div>
        </>
      )}
      <div>
        <Button label="Previous" onClick={handlePreviousUser} />
        <Button label="Next" onClick={handleNextUser} />
      </div>
    </div>
  );
}

export default UserList;
