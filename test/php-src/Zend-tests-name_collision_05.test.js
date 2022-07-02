// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_05.phpt
  it("Object naming collision error: interface/trait", function () {
    expect(parser.parseCode("<?php\ninterface A { }\ntrait A { }\n?>")).toMatchSnapshot();
  });
});
