// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_03.phpt
  it("Object naming collision error: class/trait", function () {
    expect(parser.parseCode("<?php\nclass A { }\ntrait A { }\n?>")).toMatchSnapshot();
  });
});
