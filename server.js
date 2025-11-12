import express from "express";
import cors from "cors";
import { db } from "./db.js";
import { error } from "console";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/customers", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM customers");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi server" });
  }
});
app.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM customers WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0)
      return res.status(404).json({ message: "khong tim thay khach hang" });
    res.json(result[0]);
  });
});
app.post("/customers", async (req, res) => {
  try {
    const { name, sdt, diachi } = req.body;
    const [result] = await db.query(
      "INSERT INTO customers (name, sdt, diachi) VALUES (?, ?, ?)",
      [name, sdt, diachi]
    );
    res.json({ message: "Đã thêm khách hàng!", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi server" });
  }
});

app.put("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, sdt, diachi } = req.body;
    await db.query(
      "UPDATE customers SET name = ?, sdt = ?, diachi = ? WHERE id = ?",
      [name, sdt, diachi, id]
    );
    res.json({ message: "Đã cập nhật thông tin khách hàng!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi server" });
  }
});

app.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM customers WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Xóa khách hàng thành công" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
