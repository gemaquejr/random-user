import React from 'react';
import Loading from '../components/Loading';
import UserList from '../components/UserList';

function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Loading />
      <UserList />
    </div>
  );
}

export default Home;
