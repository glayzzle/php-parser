// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/003.phpt
  it("tidy_clean_repair()", function () {
    expect(parser.parseCode("<?php\n    $a = tidy_parse_string(\"<HTML></HTML>\");\n    tidy_clean_repair($a);\n    echo tidy_get_output($a);\n?>")).toMatchSnapshot();
  });
});
