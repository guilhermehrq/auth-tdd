const request = require("supertest");
const app = require("../../src/app");

describe("Session", () => {
  it("should be able to access private routes when authenticated", async () => {
    const user = await request(app)
      .post("/user/login")
      .send({
        login: "jamal@exemplo.com",
        password: "teste123"
      });

    const response = await request(app)
      .get("/product")
      .set("Authorization", `Bearer ${user.body.content.user.token}`);

    expect(response.status).toBe(200);
  });

  it("should be able to access private routes without jwt", async () => {
    const response = await request(app).get("/product");

    expect(response.status).toBe(401);
  });

  it("should be able to access private routes with invalid jwt", async () => {
    const response = await request(app)
      .get("/product")
      .set("Authorization", `Bearer 123`);

    expect(response.status).toBe(401);
  });
});
