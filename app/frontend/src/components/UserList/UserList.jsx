import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/requests';
import styles from './UserList.module.css';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import Error from '../Error';

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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Error message={error} />
          {users.map((user, index) => (
            index === currentIndex && (
            <div className={styles.container_user} key={user.id}>
              <div className={styles.user_header}>
                <div className={styles.user_name}>
                  <p>Hi, My name is:</p>
                  <h2>{user.name}</h2>
                </div>
                <figure className={styles.user_container_avatar}>
                  <img src={user.photo} alt={user.name} />
                </figure>
              </div>
              <div className={styles.container_user_data}>
                <div className={styles.user_email}>
                  <h5>Email:</h5>
                  <p>{user.email}</p>
                </div>
                <div className={styles.user_birthday}>
                  <h5>Birthday:</h5>
                  <p>{formatBirthday(user.birthday)}</p>
                </div>
                <div className={styles.user_address}>
                  <h5>Address:</h5>
                  <p>{user.address}</p>
                </div>
                <div className={styles.user_phone}>
                  <h5>Phone:</h5>
                  <p>{user.phone}</p>
                </div>
                <div className={styles.user_password}>
                  <h5>Password:</h5>
                  <p>{user.password}</p>
                </div>
              </div>
            </div>
            )
          ))}
        </>
      )}
      <div className={styles.nav_buttons}>
        <Button label="Previous" onClick={handlePreviousUser} />
        <Button label="Next" onClick={handleNextUser} />
      </div>
    </>
  );
}

export default UserList;
