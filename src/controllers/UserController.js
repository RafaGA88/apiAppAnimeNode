const User = require('../models/User');

class UserController {
  async criaUser(req, res) {
    try {
      const user = await User.create(req.body);

      res.json(user);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}
const userController = new UserController();
module.exports = userController;
