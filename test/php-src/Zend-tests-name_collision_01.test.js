// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_01.phpt
  it("Object naming collision error: class/class", function () {
    expect(parser.parseCode("<?php\nclass A { }\nclass A { }\n?>")).toMatchSnapshot();
  });
});
