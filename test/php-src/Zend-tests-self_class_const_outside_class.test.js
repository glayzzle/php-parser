// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/self_class_const_outside_class.phpt
  it("Accessing self::FOO in a free function", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump(self::FOO);\n}\n?>")).toMatchSnapshot();
  });
});
