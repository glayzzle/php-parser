// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_resource.phpt
  it("Bug #27822 (is_resource() returns TRUE for closed resources)", function () {
    expect(parser.parseCode("<?php\n    $f = fopen(__FILE__, 'r');\n    fclose($f);\n    var_dump(is_resource($f));\n?>")).toMatchSnapshot();
  });
});
