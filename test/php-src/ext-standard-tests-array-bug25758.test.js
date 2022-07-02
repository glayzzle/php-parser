// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug25758.phpt
  it("Bug #25758 (var_export does not escape ' & \\ inside array keys)", function () {
    expect(parser.parseCode("<?php\n    $a = array (\"quote'\" => array(\"quote'\"));\n    echo var_export($a, true);\n?>")).toMatchSnapshot();
  });
});
