const db = require("../configs/db");

module.exports = {
  getAllCustomers: async () => {
    const [rows] = await db.query("SELECT * FROM customers");
    return rows;
  },

  getCustomerById: async (id) => {
    const [rows] = await db.query("SELECT * FROM customers WHERE id = ?", [id]);
    return rows[0];
  },

  createCustomer: async (data) => {
    const { name, sdt, diachi } = data;
    await db.query(
      "INSERT INTO customers (name,sdt,diachi) VALUES (?, ? , ?)",
      [name, sdt, diachi]
    );
    return true;
  },

  updateCustomer: async (id, data) => {
    const { name, sdt, diachi } = data;
    await db.query(
      "UPDATE customers SET name = ?, sdt = ?,diachi = ? WHERE id = ?",
      [name, sdt, diachi, id]
    );
    return true;
  },

  deleteCustomer: async (id) => {
    await db.query("DELETE FROM customers WHERE id = ?", [id]);
    return true;
  },
};
