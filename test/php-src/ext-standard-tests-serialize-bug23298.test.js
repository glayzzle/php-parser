// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug23298.phpt
  it("Bug #23298 (serialize() and floats/doubles)", function () {
    expect(parser.parseCode("<?php\n    ini_set('precision', 12);\n    $foo = 1.428571428571428647642857142;\n    $bar = unserialize(serialize($foo));\n    var_dump(($foo === $bar));\n?>")).toMatchSnapshot();
  });
});
