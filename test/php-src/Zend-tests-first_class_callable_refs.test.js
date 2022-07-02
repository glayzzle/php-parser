// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_refs.phpt
  it("First class callables and references", function () {
    expect(parser.parseCode("<?php\nfunction &id(&$x) {\n    return $x;\n}\n$fn = id(...);\n$i = 0;\n$i2 =& $fn($i);\n$i++;\nvar_dump($i2);\n?>")).toMatchSnapshot();
  });
});
