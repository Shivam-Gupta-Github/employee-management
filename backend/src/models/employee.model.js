import db from "../config/db.js";

class Employee {
  static create({ name, email, position }, callback) {
    const sql =
      "INSERT INTO employees (name, email, position) VALUES (?, ?, ?)";
    db.run(sql, [name, email, position], function (err) {
      callback(err, { id: this?.lastID, name, email, position });
    });
  }

  static findAll(callback) {
    db.all("SELECT * FROM employees", [], callback);
  }

  static findById(id, callback) {
    db.get("SELECT * FROM employees WHERE id = ?", [id], callback);
  }

  static update(id, { name, email, position }, callback) {
    const sql = "UPDATE employees SET name=?, email=?, position=? WHERE id=?";
    db.run(sql, [name, email, position, id], function (err) {
      callback(err, { id, name, email, position });
    });
  }

  static delete(id, callback) {
    db.run("DELETE FROM employees WHERE id=?", [id], function (err) {
      callback(err, { deleted: this?.changes });
    });
  }
}

export default Employee;
