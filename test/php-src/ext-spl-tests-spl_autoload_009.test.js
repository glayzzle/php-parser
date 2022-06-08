// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_autoload_009.phpt
  it("SPL: spl_autoload() and friends", function () {
    expect(parser.parseCode("<?php\nfunction my_autoload($name)\n{\n    require $name . '.class.inc';\n    var_dump(class_exists($name));\n}\nspl_autoload_register(\"spl_autoload\");\nspl_autoload_register(\"my_autoload\");\n$obj = new testclass;\n?>")).toMatchSnapshot();
  });
});
