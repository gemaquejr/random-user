import React from 'react';
import Loading from '../components/Loading';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Loading />
      <Button call to action />
      <Button />
    </div>
  );
}

export default Home;
