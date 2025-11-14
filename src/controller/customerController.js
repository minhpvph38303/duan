const { message } = require("statuses");
const customerService = require("../service/customerService");

module.exports = {
  getAllCustomers: async (req, res) => {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  },
  getCustomerById: async (req, res) => {
    const id = req.params.id;
    const customers = await customerService.getCustomerById(id);
    res.json(customers);
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
