// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_04.phpt
  it("Object naming collision error: interface/interface", function () {
    expect(parser.parseCode("<?php\ninterface A { }\ninterface A { }\n?>")).toMatchSnapshot();
  });
});
