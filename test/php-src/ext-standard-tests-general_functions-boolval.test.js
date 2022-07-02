// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/boolval.phpt
  it("Testing boolval()", function () {
    expect(parser.parseCode("<?php\n    var_dump(boolval(false));\n    var_dump(boolval(NULL));\n    var_dump(boolval(\"\"));\n    var_dump(boolval(0));\n    var_dump(boolval(array()));\n    var_dump(boolval(true));\n    var_dump(boolval(\"abc\"));\n    var_dump(boolval(0.5));\n    var_dump(boolval(100));\n    var_dump(boolval(new stdClass()));\n    var_dump(boolval(STDIN));\n?>")).toMatchSnapshot();
  });
});
