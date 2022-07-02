// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_02.phpt
  it("Object naming collision error: class/interface", function () {
    expect(parser.parseCode("<?php\nclass A { }\ninterface A { }\n?>")).toMatchSnapshot();
  });
});
