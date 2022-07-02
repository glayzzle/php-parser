// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_09.phpt
  it("Class declaration colliding with import (in namespace)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n    const BAR = 42;\n}\nnamespace Bazzle {\n    use const Foo\\BAR;\n    const BAR = 24;\n}\n?>")).toMatchSnapshot();
  });
});
