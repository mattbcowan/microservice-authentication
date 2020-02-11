const should = require("should");
const request = require("supertest");
const { create_a_user } = require("../controllers/userController");

describe("Object", function() {
  describe("#create_a_user()", function() {
    it("should create a new user object", function(done) {
      request(create_a_user)
        .post("/users")
        .send({ name: "Test user" })
        .expect(200);
      done();
    });
  });
});
