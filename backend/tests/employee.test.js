import request from "supertest";
import app from "../src/app.js"; // your Express app

describe("Employee API CRUD", () => {
  let createdId;

  // CREATE
  it("should create a new employee", async () => {
    const res = await request(app)
      .post("/api/employees")
      .send({
        name: "John Doe",
        email: "john@example.com",
        position: "Developer",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("John Doe");
    createdId = res.body.id; // store for later
  });

  // READ ALL
  it("should fetch all employees", async () => {
    const res = await request(app).get("/api/employees");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // READ ONE
  it("should fetch a single employee by id", async () => {
    const res = await request(app).get(`/api/employees/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", createdId);
  });

  // UPDATE
  it("should update an employee", async () => {
    const res = await request(app)
      .put(`/api/employees/${createdId}`)
      .send({
        name: "Jane Doe",
        email: "jane@example.com",
        position: "Manager",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Jane Doe");
  });

  // DELETE
  it("should delete an employee", async () => {
    const res = await request(app).delete(`/api/employees/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("deleted", 1);
  });

  // INVALID ID
  it("should return 404 if employee not found", async () => {
    const res = await request(app).get("/api/employees/99999");
    expect(res.statusCode).toBe(404);
  });
});
