// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/008.phpt
  it("Accessing the error buffer via $obj->error_buf...", function () {
    expect(parser.parseCode("<?php\n    $a = tidy_parse_string(\"<HTML><asd asdf></HTML>\");\n    echo $a->errorBuffer;\n?>")).toMatchSnapshot();
  });
});
