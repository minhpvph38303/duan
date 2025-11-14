const { message } = require("statuses");
const customerService = require("../service/customerService");

module.exports = {
  getAllCustomers: async (req, res) => {
    await customerService.getAllCustomers();
    res.json({ message: "hien thi" });
  },
  getCustomerById: async (req, res) => {
    const id = req.params.id;
    await customerService.getCustomerById(id);
    res.json({ message: "hien thi khach hang theo id" });
  },
  createCustomer: async (req, res) => {
    await customerService.createCustomer(req.body);
    res.json({ message: "them thanh cong" });
  },
  updateCustomer: async (req, res) => {
    const id = req.params.id;
    await customerService.updateCustomer(id, req.body);
    res.json({ message: "cap nhat thanh cong" });
  },
  deleteCustomer: async (req, res) => {
    const id = req.params.id;
    await customerService.deleteCustomer(id);
    res.json({ message: "xoa thanh cong" });
  },
};
