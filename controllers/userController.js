const User = require("../models/user");

const create_a_user = (req, res) => {
  const user = new User();
  user.name = req.body.name;

  user.save(function(err) {
    if (err) res.send(err);

    res.json({ message: "User created!" });
  });
};

const get_all_users = (req, res) => {
  User.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
};

const get_one_user = (req, res) => {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

const update_user = (req, res) => {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err);
    user.name = req.body.name;

    user.save(function(err) {
      if (err) res.send(err);

      res.json({ message: "User updated" });
    });
  });
};

const delete_user = (req, res) => {
  User.deleteOne(
    {
      _id: req.params.user_id
    },
    function(err) {
      if (err) res.send(err);

      res.json({ message: "User successfully deleted!" });
    }
  );
};

module.exports = {
  create_a_user,
  get_all_users,
  get_one_user,
  update_user,
  delete_user
};
