// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/038.phpt
  it("Test scalar, array", function () {
    expect(parser.parseCode("<?php\n$var = 12;\n$res = filter_var($var, FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL));\nvar_dump($res);\n$var = array(12);\n$res = filter_var($var, FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL));\nvar_dump($res);\n$var = 12;\n$res = filter_var($var, FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL|FILTER_FORCE_ARRAY));\nvar_dump($res);\n$var = 12;\n$res = filter_var($var, FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL|FILTER_REQUIRE_ARRAY));\nvar_dump($res);\n$var = array(12);\n$res = filter_var($var, FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL|FILTER_REQUIRE_ARRAY));\nvar_dump($res);\n$var = array(12);\n$res = filter_var($var, FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL|FILTER_FORCE_ARRAY|FILTER_REQUIRE_ARRAY));\nvar_dump($res);\n$var = array(12);\n$res = filter_var($var, FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL|FILTER_FORCE_ARRAY));\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
