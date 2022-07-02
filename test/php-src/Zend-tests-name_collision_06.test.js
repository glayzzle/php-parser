// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_06.phpt
  it("Object naming collision error: trait/trait", function () {
    expect(parser.parseCode("<?php\ntrait A { }\ntrait A { }\n?>")).toMatchSnapshot();
  });
});
