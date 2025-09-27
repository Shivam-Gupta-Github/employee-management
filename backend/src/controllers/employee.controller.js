import Employee from "../models/employee.model.js";

export const createEmployee = (req, res, next) => {
  Employee.create(req.body, (err, employee) => {
    if (err) return next(err);
    res.status(201).json(employee);
  });
};

export const getEmployees = (req, res, next) => {
  Employee.findAll((err, employees) => {
    if (err) return next(err);
    res.json(employees);
  });
};

export const getEmployeeById = (req, res, next) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) return next(err);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  });
};

export const updateEmployee = (req, res, next) => {
  Employee.update(req.params.id, req.body, (err, employee) => {
    if (err) return next(err);
    res.json(employee);
  });
};

export const deleteEmployee = (req, res, next) => {
  Employee.delete(req.params.id, (err, result) => {
    if (err) return next(err);
    res.json(result);
  });
};
