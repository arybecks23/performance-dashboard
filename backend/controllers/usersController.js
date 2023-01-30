const pool = require("../pg");

const getAllUsers = async (req, res) => {
  const { order_by } = req.query;
  pool.query(
    `SELECT * FROM users ORDER BY ${order_by} DESC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getAllUsers,
};
