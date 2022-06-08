// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/rfc004.phpt
  it("RFC example: missing return type on override", function () {
    expect(parser.parseCode("<?php\nclass User {}\ninterface UserGateway {\n    function find($id) : User;\n}\nclass UserGateway_MySql implements UserGateway {\n    // must return User or subtype of User\n    function find($id) {\n        return new User;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
