const routes = require("express").Router();
const user = require("./core/user/controller");
const product = require('./core/product/controller');
const authMiddleware = require("./middleware/auth");

routes.get("/ping", (req, res) => {
  return res.status(200).send(new Date());
});

routes.post("/user", (req, res) => user.createUser(req, res));
routes.post("/user/login", (req, res) => user.loginUser(req, res));

routes.use(authMiddleware);

routes.get("/product", (req, res) => product.get(req, res));

module.exports = routes;
