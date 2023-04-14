const axios = require('axios');

module.exports = {
  async up (queryInterface) {
    const { data } = await axios.get('https://randomuser.me/api/?results=40');
    const users = data.results.map((user) => ({
      photo: user.picture.large,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      phone: user.phone,
      birthday: new Date(user.dob.date),
      address: `${user.location.street.name}, ${user.location.street.number} - ${user.location.city}/${user.location.state}`,
      password: user.login.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    
    return queryInterface.bulkInsert('users', users, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
