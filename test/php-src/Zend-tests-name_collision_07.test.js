// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/name_collision_07.phpt
  it("Class declaration colliding with import (in namespace)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n    class Bar {}\n}\nnamespace Bazzle {\n    use Foo\\Bar;\n    class Bar {}\n}\n?>")).toMatchSnapshot();
  });
});
