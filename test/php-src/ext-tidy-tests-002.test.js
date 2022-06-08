// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/002.phpt
  it("tidy_parse_string()", function () {
    expect(parser.parseCode("<?php\n        $a = tidy_parse_string(\"<HTML></HTML>\");\n        echo tidy_get_output($a);\n?>")).toMatchSnapshot();
  });
});
