require("../../src/models/user");

require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const mongoose = require("mongoose");
const User = mongoose.model("User");

const dbConfig = {
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME
};

describe("User", () => {
  beforeAll(async () => {
    await mongoose.connect(
      `mongodb://${dbConfig.USER}:${dbConfig.PASS}@ds241097.mlab.com:41097/${
        dbConfig.DB_NAME
      }`);
  });

  beforeEach(() => {
    for(let key in mongoose.connection.collections) {
        mongoose.connection.collections[key].drop();
    }
  });

  it("should create a user", async () => {
    await User.create({
      name: "Jamal",
      email: "jamal@tests.com",
      password_hash: "123456"
    });

    const user = await User.findOne({ email: "jamal@tests.com" });

    expect(user.email).toBe("jamal@tests.com");
  });

  afterAll(async ()=> {
      await mongoose.disconnect();
  });
});
