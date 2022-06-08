// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/035.phpt
  it("GET/POST/REQUEST Test with input_filter", function () {
    expect(parser.parseCode("<?php\n$ret = filter_input(INPUT_GET, 'a', FILTER_VALIDATE_INT);\nvar_dump($ret);\n$ret = filter_input(INPUT_GET, 'a', FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL));\nvar_dump($ret);\n$ret = filter_input(INPUT_GET, 'ar', FILTER_VALIDATE_INT, array('flags'=>FILTER_REQUIRE_ARRAY));\nvar_dump($ret);\n$ret = filter_input(INPUT_GET, 'ar', FILTER_VALIDATE_INT, array('flags'=>FILTER_FLAG_ALLOW_OCTAL|FILTER_REQUIRE_ARRAY));\nvar_dump($ret);\n?>")).toMatchSnapshot();
  });
});
