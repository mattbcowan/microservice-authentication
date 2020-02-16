const User = require("../models/user");

const create_a_user = async (req, res) => {
  let user = new User();
  user.name = req.body.name;
  await user
    .save()
    .then(() => res.json({ message: "User created!" }))
    .catch(err => res.send(err));
};

const get_all_users = async (req, res) => {
  try {
    users = await User.find();
    res.json(users);
  } catch (err) {
    await res.send(err);
  }
};

const get_one_user = async (req, res) => {
  try {
    user = await User.findById(req.params.user_id);
    res.json(user);
  } catch (err) {
    await res.json(err);
  }
};

const update_user = async (req, res) => {
  try {
    user = await User.findById(req.params.user_id);
    user.name = req.body.name;
    user.save();
    res.json({ message: "User updated" });
  } catch (err) {
    await res.json(err);
  }
};

const delete_user = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.user_id });
    res.json({ message: "User successfully deleted." });
  } catch (err) {
    await res.json(err);
  }
};

module.exports = {
  create_a_user,
  get_all_users,
  get_one_user,
  update_user,
  delete_user
};
