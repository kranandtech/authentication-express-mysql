const db = require('../config/db');

const createUser = (username, email, hashedPassword) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (error, data) => {
      if (error) {
        return reject(error);
      }
      resolve(data);
    });
  });
};

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (error, data) => {
      if (error) {
        return reject(error);
      }
      resolve(data[0]);
    });
  });
};

const findUserById = (users_id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE users_id = ?', [users_id], (error, data) => {
      if (error) {
        return reject(error);
      }
      resolve(data[0]);
    });
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById
};
