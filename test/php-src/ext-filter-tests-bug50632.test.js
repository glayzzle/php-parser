// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug50632.phpt
  it("bug 50632, filter_input() does not return default value if the variable does not exist", function () {
    expect(parser.parseCode("<?php\n$foo = filter_input(INPUT_GET, 'foo', FILTER_VALIDATE_INT, array('flags' => FILTER_REQUIRE_SCALAR, 'options' => array('default' => 23)));\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
