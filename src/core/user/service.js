const repository = require("./repository");
const jwt = require("jsonwebtoken");

module.exports = {
  loginUser
};

async function loginUser(data) {
  const user = await repository.loginUser(data);

  user.token = await generateToken(user);

  const { _id, name, email, token } = user;

  return { _id, name, email, token };
}

async function generateToken(data) {
  return await jwt.sign(
    { userId: data._id, email: data.email },
    process.env.APP_SECRET
  );
}
