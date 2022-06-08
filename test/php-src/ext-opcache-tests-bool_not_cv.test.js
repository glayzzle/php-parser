// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bool_not_cv.phpt
  it("$v = !$v/(bool)$v checks for undefined variables", function () {
    expect(parser.parseCode("<?php\nfunction undef_negation() {\n    echo \"In undef_negation\\n\";\n    $v = !$v;\n    var_export($v);\n    echo \"\\n\";\n}\nfunction undef_bool_cast() {\n    echo \"In undef_bool_cast\\n\";\n    $v = (bool)$v;\n    var_export($v);\n    echo \"\\n\";\n}\nundef_negation();\nundef_bool_cast();\n?>")).toMatchSnapshot();
  });
});
