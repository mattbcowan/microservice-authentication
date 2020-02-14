const User = require("../models/user");

const create_a_user = async (req, res) => {
  let user = new User();
  user.name = req.body.name;

  try {
    await user.save();
  } catch (err) {
    await res.send(err);
  }

  res.json({ message: "User created!" });
};

const get_all_users = async (req, res) => {
  try {
    users = await User.find();
  } catch (err) {
    await res.send(err);
  }
  res.json(users);
};

const get_one_user = async (req, res) => {
  try {
    user = await User.findById(req.params.user_id);
  } catch (err) {
    await res.json(err);
  }
  res.json(user);
};

const update_user = async (req, res) => {
  try {
    user = await User.findById(req.params.user_id);
    user.name = req.body.name;
    user.save();
  } catch (err) {
    await res.json(err);
  }
  res.json({ message: "User updated" });
};

const delete_user = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.user_id });
  } catch (err) {
    await res.json(err);
  }

  res.json({ message: "User successfully deleted." });
};

module.exports = {
  create_a_user,
  get_all_users,
  get_one_user,
  update_user,
  delete_user
};
